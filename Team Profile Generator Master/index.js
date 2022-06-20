const inquirer = require(`inquirer`);
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');


const employees = [];

function initApp() {
  runHtml();
  addEmployee();  
}

function addEmployee() {
    inquirer
    .prompt([
    {
        type: 'input',
        name: 'name',
        message: "please enter the employees name",
    },
    {
        type: 'list',
        name: 'role',
        message: "please select the employees role",
        choices: ['Engineer', 'Intern', 'Manager'],
    },
    {
        type: 'input',
        name: 'id',
        message: "Please enter the Employees ID",
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter the employees email address",
    },
    ])

    .then(function ({name, role, id, email }) 
    {
        let roleData = '';
        if (role === 'Engineer') {
            roleData = 'Github Username';
        } else if (role === 'Intern') {
            roleData = 'School Name';
        } else {
            roleData = 'Office Number';
        }
        inquirer
        .prompt([
            {
                message: `Please enter employees ${roleData}`,
                name: 'roleData',
            },
            {
                type: 'list',
                message: 'Would you like to add any more employees?',
                choices: ['yes', 'no'],
                name: 'extraEmployee',
            },
        ])
        .then(function ({roleData, extraEmployee}) {
            let newEmployee;
            if (role === 'Engineer') {
                newEmployee = new Engineer (name, id, email, roleData);
            } else if (role === 'Intern') {
                newEmployee = new Intern(name, id, email, roleData);
            } else{
                newEmployee = new Manager(name, id, email, roleData);
            }

            employees.push(newEmployee);
            addHtml(newEmployee).then(function () {
               if (extraEmployee === 'yes') {
                addEmployee();
               } else {
                completeHtml();
               }
            });
        });
    });
}


function runHtml() {
    const html = `<!DOCTYPE html
    <html lang ="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
    <link rel = "stylesheet" href="/dist/style.css">
    <title>Team Profile Generator</title>
    </head>
    <body>
        <nav class ="navbar navbar-dark mb-5">
        <span class="navbar-brand mb-3 mt-3 h1 w-100 text-center">The Dream Team</span> 
        </nav>
        <div class="container">
            <div class="row"`;
    
    fs.writeFile('./dist/index.html', html, function (err) {
        if (err) {
            console.log(err);

        }
    });
    console.log('Please enter your employee information');
}

function addHtml(employee) {
    return new Promise(function (resolve, reject) {
        const name = employee.getName();
        const role = employee.getRole();
        const id = employee.getId();
        const email = employee.getEmail();
        let data = '';
        if (role === 'Engineer') {
            const gitHub = employee.getGithub();
            data = `<div class="col-4">
            <div class="card mx-auto mb-3 shadow" style="width: 18rem">
              <h5 class="card-header">${name}<br /><br /><i class="fas fa-glasses"></i> Engineer</h5>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID: ${id}</li>
                  <li class="list-group-item">Email:<a href="mailto:${email}" target="_blank"> ${email}</a></li>
                  <li class="list-group-item">GitHub:<a href="https://github.com/${gitHub}" target="_blank"> ${gitHub}</a></li>
                </ul>
            </div>
          </div>`;
        } else if (role === 'Intern') {
            const school = employee.getSchool();
            data =`<div class="col-4">
            <div class="card mx-auto mb-3 shadow" style="width: 18rem">
              <h5 class="card-header">${name}<br /><br /><i class="fas fa-user-graduate"></i> Intern</h5>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID: ${id}</li>
                  <li class="list-group-item">Email:<a href="mailto:${email}" target="_blank"> ${email}</a></li>
                  <li class="list-group-item">School: ${school}</li>
                </ul>
            </div>
          </div>`;
        } else {
            const officeNumber = employee.getOfficeNumber();
            data = `<div class="col-4">
            <div class="card mx-auto mb-3 shadow" style="width: 18rem">
              <h5 class="card-header">${name}<br /><br /><i class="fas fa-mug-hot"></i> Manager</h5>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID: ${id}</li>
                  <li class="list-group-item">Email:<a href="mailto:${email}" target="_blank"> ${email}</a></li>
                  <li class="list-group-item">Office Number: ${officeNumber}</li>
                </ul>
            </div>
          </div>`;
        }
        console.log('Employee successfully added');
        fs.appendFile('./dist/index.html', data, function (err) {
            if (err) {
                return reject(err);
            }
            return resolve();
        });
    });
}

function completeHtml() {
    const html = 
    `</div>
    </div>
    </body>
    </html>`;

    fs.appendFile('./dist/index.html', html, function (err) {
        if (err) {
            console.log(err);
        }
    });
    console.log('Congrats! HTML created successfully!');
}

initApp();