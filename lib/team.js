const inquirer = require("inquirer");
const Engineer = require('./engineer');
const Intern = require('./intern');
const makeHTMLFile = require('../src/generateHTML');
class Team{
    constructor(manager) {
        // create a team object
        // team object has one manager and one or more employees
        this.team = { 
            manager:manager,
            employees: [],
        }
    }
    build(){ 
        // call method to start prompt to ask user is they want to add members to the team
        this.addEmployee()
    }

    addEmployee() {
        // start prompt to see what type of employee user wants to add or if they are finished building their team
        inquirer
            .prompt([
                {
                type: 'list',
                name: 'employee',
                message: 'Would you like to add a member to the team or finish building the team?',
                choices: ['Add engineer', 'Add intern', 'Finish build'],
                },
            ])
            .then((data) => {
                // If engineer or Intern is chosen then we will call a method to start their respective prompts
                // if the Finish build is chosen then we will call the function to make our HTML output
                switch(data.employee) {
                    case 'Add engineer':
                        this.addEngineer()
                        break;
                    case 'Add intern':
                        this.addIntern()
                        break;
                    case 'Finish build':
                        makeHTMLFile(this.team)
                        break;
                }
            })
    }

    addEngineer(){
        // prompts specific to the new engineer being added to the team
        inquirer
            .prompt([
                {
                type: 'input',
                name: 'name',
                message: 'What is the team engineer\'s name?',
                },
                {
                type: 'input',
                name: 'id',
                message: 'What is the engineer\'s employee ID?',
                },
                {
                type: 'input',
                name: 'emailAddress',
                message: 'What is the engineer\'s email address?',
                },
                {
                type: 'input',
                name: 'github',
                message: 'What is the engineer\'s github username?',
                },
            ])
            .then((data) => {
                // once we get the engineer specific data then we can create an instance of an engineer 
                // and add that to the employee list of the team object
                // Once employee is added we go back to the add employee prompt
                this.team.employees.push(new Engineer(data.name, data.id, data.emailAddress, data.github));
                this.addEmployee()
            })
    }

    addIntern(){
        // prompts specific to the new intern being added to the team
        inquirer
            .prompt([
                {
                type: 'input',
                name: 'name',
                message: 'What is the team intern\'s name?',
                },
                {
                type: 'input',
                name: 'id',
                message: 'What is the intern\'s employee ID?',
                },
                {
                type: 'input',
                name: 'emailAddress',
                message: 'What is the intern\'s email address?',
                },
                {
                type: 'input',
                name: 'school',
                message: 'What is the intern\'s school name?',
                },
            ])
            .then((data) => {
                // once we get the intern specific data then we can create an instance of an intern 
                // and add that to the employee list of the team object
                // Once employee is added we go back to the add employee prompt
                this.team.employees.push(new Intern(data.name, data.id, data.emailAddress, data.school));
                this.addEmployee()
            })
    }
}

module.exports = Team;