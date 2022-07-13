const Employee = require('./lib/Employee');
const createHtml = require('./src/createHtml');
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const workMembers = [];

function initApp() {
    console.log("Hello, let us begin generating your team profile")
    inquirer.prompt([
        {
            type: 'input',
            message: "What is the managers name?",
            name: 'name'
        },
        {
            type: 'input',
            message: "What is the managers Employee ID number?",
            name:   "id"
        },
        {
            type: 'input',
            message: "Please enter the managers email address",
            name: "email"
        },
        {
            type: 'input',
            message: "Please enter the managers office number",
            name: "officeNumber"
        },
    ]).then((res) => {
        var manager = new Manager(res.name, res.id, res.email, res.officeNumber);

        workMembers.push(manager);

        console.log(`We have added your manager, ${res.name}, to the team portfolio`);

        menu();

    })
}

function addEngineer() {
    console.log("Next lets add the Engineer to the Team Portfolio")


    inquirer.prompt([
        {
            type: 'input',
            message: "What is the Engineer's name?",
            name: 'name'
        },
        {
            type: 'input',
            message: "What is the Engineer's Employee ID number?",
            name: "id"
        },
        {
            type: 'input',
            message: "Please enter the Engineer's email address.",
            name: "email"
        },
        {
            type: 'input',
            message: "Please enter the Engineers Github",
            name: "github"
        },
    ]).then((res) => {
        var engineer = new Engineer(res.name, res.id, res.email, res.github);

        workMembers.push(engineer);

        console.log(`We have added your Engineer, ${res.name}, to the team portfolio`);

        menu();
    })

}

function addIntern() {
    console.log("Finally lets add the Intern to the team portfolio")

    inquirer.prompt([
        {
            type: 'input',
            message: "What is the Intern's name?",
            name: 'name'
        },
        {
            type: 'input',
            message: "What is the Intern's Employee ID number?",
            name: "id"
        },
        {
            type: 'input',
            message: "Please enter the Intern's email address.",
            name: "email"
        },
        {
            type: 'input',
            message: "Please enter the school the intern attends",
            name: "school"
        },
    ]).then((res) => {
        var intern = new Intern(res.name, res.id, res.email, res.school);
       
        workMembers.push(intern);

        console.log(`We have added your Intern, ${res.name}, to the team portfolio`);

 
        menu();
    })
}

function menu() {
 
    inquirer.prompt(
        {
            type: 'list',
            message: 'What would you like to do next?',
            choices: ['Add an Engineer', 'Add an Intern', 'Finish Building My Team'],
            name: 'menuChoice'
        }
    ).then((res) => {
        if (res.menuChoice === 'Add an Engineer') {
            addEngineer();
        } else if (res.menuChoice === 'Add an Intern') {
            addIntern();
        } else {
            completeTeam();
        }
    })
}


function completeTeam() {
    fs.writeFile(`index.html`,createHtml(workMembers), error => error ? console.log(error) : console.log('Congrats, We have successfully created your Team Profile as an HTML file'))
}

initApp();