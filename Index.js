// global variables
const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// const mockManagerData {

// }

// initial questions when first initializing application
const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the team manager?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter the name of the team manager.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the ID of the team manager?',
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log('Please enter the ID of the team manager');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the email of the team manager?',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter the email of the team manager');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the office number of the team manager?',
        validate: officeNumberInput => {
            if (officeNumberInput) {
                return true;
            } else {
                console.log('Please enter the office number of the team manager.');
                return false;
            }
        }
    },
    // {
    //     type: 'input',
    //     name: '',
    //     message: '',
    //     validate:  => {
    //         if () {
    //             return true;
    //         } else {
    //             console.log('');
    //             return false;
    //         }
    //     }
    // },
]

// function to initialize app
function init() {
    return inquirer.prompt(managerQuestions);
};

init()
    .then(data => {
        return new Manager(data);
    })
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });