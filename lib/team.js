const inquirer = require("inquirer");
const Engineer = require('./engineer');
const Intern = require('./intern');
const makeHTMLFile = require('../src/generateHTML');
class Team{
    constructor(manager) {
        this.team = {
            manager:manager,
            employees: [],
        }
    }
    build(){ 
        this.addEmployee()
    }

    addEmployee() {
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
                this.team.employees.push(new Engineer(data.name, data.id, data.emailAddress, data.github));
                this.addEmployee()
            })
    }

    addIntern(){
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
                this.team.employees.push(new Intern(data.name, data.id, data.emailAddress, data.school));
                this.addEmployee()
            })
    }
}

module.exports = Team;