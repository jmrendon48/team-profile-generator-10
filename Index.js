// global variables
const fs = require('fs');
const inquirer = require('inquirer');

// function to initialize app
function init() {
    return inquirer.prompt(employeeQuestions);
};

init();