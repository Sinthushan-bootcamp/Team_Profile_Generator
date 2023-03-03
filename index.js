const Team = require("./lib/team");
const Manager = require("./lib/manager");
const inquirer = require("inquirer");

// Function to prompt user for manager information and create a Team instance and ren the build method.
function createTeam(){
    inquirer
        .prompt([
            {
            type: 'input',
            name: 'managerName',
            message: 'What is the team manager\'s name?',
            },
            {
            type: 'input',
            name: 'managerID',
            message: 'What is the team manager\'s employee ID?',
            },
            {
            type: 'input',
            name: 'emailAddress',
            message: 'What is the team manager\'s email address?',
            },
            {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the team manager\'s office number?',
            },
        ])
        .then((data) => {
            const manager = new Manager(data.managerName, data.managerID, data.emailAddress, data.officeNumber); // create a new Manager based on date from prompts
            const team = new Team(manager); // create a new Team passing in the newly created Manager
            team.build(); //run the build method
        })
        .catch((error) => {
            // if there is an error in the manager and team instance creation, throw an error and rerun the prompt
            console.error("Please retype in manager data", error);
            getManagerData()
        });
}

createTeam()