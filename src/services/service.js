
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

                services.forEach(s => {
                    teamServices.forEach(ts => {
                        if (ts == s.name) {
                            if (!result[team]) {
                                result[team] = [s]
                            } else {
                                result[team].push(s)
                            }
                        }
                    })
                })
            })
            return result
        })
}

function describeServices(serviceArns) {
    return new Promise((resolve, reject) => {
        var params = {
            services: serviceArns,
            cluster: clusterName,
        };
        ecs.describeServices(params, function(err, data) {
            if (err) reject(err)
            else resolve(data)
        })
    })
}

async function getTeamStatus(teamServices) {
    let result = await describeServices(teamServices.map(s => s.serviceArn))

    return result.services.map((s) => {
        const activeDeployment = s.deployments.find(d => d.status === "PRIMARY")
        const secondaryDeployment = s.deployments.find(d => d.status !== "PRIMARY")

        let status = {
            name: s.serviceName.split('-')[1],
            deploymentInProgress: s.deployments.length > 1,
            numDeployments: s.deployments.length,
        }

        if (secondaryDeployment) {
            console.log(s)
            status = {
                ...status,
                oldDeploymentNumTasks: secondaryDeployment.runningCount,
                newDeploymentNumTasks: activeDeployment.runningCount,
                desiredCount: s.desiredCount,
            }
        }

        return status
    })
}

export default {
    getServices,
    getTeamStatus
}