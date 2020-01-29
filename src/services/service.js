
import ECS from 'aws-sdk/clients/ecs';

const teams = process.env.VUE_APP_TEAMS.split(',')

const accessKeyId = process.env.VUE_APP_AWS_ACCESS_KEY_ID
const secretAccessKey = process.env.VUE_APP_AWS_SECRET_ACCESS_KEY

var ecs = new ECS({
    apiVersion: '2014-11-13',
    region: 'eu-west-1',
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey 
});

const clusterName = process.env.VUE_APP_CLUSTER
const environment = clusterName.split('-')[0]

function listServices() {
    var params = {
        cluster: clusterName,
        launchType: "EC2",
        maxResults: '100',
    };

    return new Promise((resolve, reject) => {
        ecs.listServices(params, (err, data) => {
            if (err) reject(err)
            else resolve(data)
        })
    })
}

function getServices() {
    const teamServices = (services, teamServices) => {
        const result = []
        services.forEach(s => {
            if (teamServices.includes(s.name)) result.push(s)
        })
        return result
    }

    return listServices()
        .then(data => {
            return data.serviceArns.map(serviceArn => {
                return {
                    name: (serviceArn.split("/")[1]).split(`${environment}-`)[1],
                    serviceArn: serviceArn
                }
            })
        })
        .then(services => {
            const result = {}
            teams.forEach(team => {
                const serviecEnvVar = `VUE_APP_${team.toUpperCase()}_SERVICES`
                console.log(`Getting variable: ${serviecEnvVar}`)
                const teamServices = process.env[serviecEnvVar].split(',')
                result[team] = teamServices
            })
            return result
        })
}

function getTeamStatus(teamName) {
    return [{
        deploymentInProgress: true,
        numDeployments: 2,
        oldDeploymentNumTasks: 1,
        newDeploymentNumTasks: 2,
        desiredCount: 3
    }]
}

export default {
    getServices,
    getTeamStatus
}