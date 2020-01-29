
//1 function to return all services mapped by team.
function getServices() {
    return {
        team1: [
            {
                name: "service1"
            },
            {
                name: "service2"
            } 
        ],
        team2: [
            {
                name: "service 3"
            }
        ]
    }
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