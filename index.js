const Team = require("./lib/team");
const Manager = require("./lib/manager");
const inquirer = require("inquirer");

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
            const manager = new Manager(data.managerName, data.managerID, data.emailAddress, data.officeNumber);
            const team = new Team(manager);
            team.build();
        })
        .catch((error) => {
            console.error("Please retype in manager data", error);
            getManagerData()
        });
}

createTeam()