const Manager = require ('./lib/Manager.js');
const Engineer = require ('./lib/Engineer.js');
const Intern = require ('./lib/Intern.js');
const fs = require ('fs');
const inquirer = require ('inquirer');
const htmlOutput = require ('./src/htmlOutput.js');
const createdPage = require ('./dist/team.html');
let teamArray = [];

function runApplication () {

    const createTeam = () => {
        inquirer.prompt([{
            type: 'list',
            message: 'Select Employee Position.',
            name: 'addPrompt',
            choices: ['Manager', 'Engineer', 'Intern', 'No More Members.']
        }]).then(function (nameInput) {
          switch(nameInput.addPrompt) {
            case 'Manager':
                addManager();
                break;
            case 'Engineer':  
                addEngineer();
                break;
            case 'Intern':
                addIntern();
                break;    

            default:
                buildHtml();
            }
        })
    }

    const addManager = () => {
        inquirer.prompt ([
            {    type: 'input',
                name: 'managerName',
                Message: 'Whats the managers name?'
            },
            {    type: 'input',
                name: 'managerID',
                Message: 'Whats the Managers Identification Number?'
            },
            {    type: 'input',
                name: 'managerEmail',
                Message: 'Whats the managers email??'
            },
            {    type: 'input',
                name: 'officeNumber',
                Message: 'Whats the managers office number?'
            },
         
            ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.officeNumber);
            teamArray.push(manager);
            createTeam();
        });
    }

    let addEngineer = () => {
        inquirer.prompt ([
            {    type: 'input',
                name: 'engineerName',
                Message: 'Whats the Engineers name?'
            },
            {    type: 'input',
                name: 'engineerID',
                Message: 'Whats the Engineers Identification Number?'
            },
            {    type: 'input',
                name: 'engineerEmail',
                Message: 'Whats the Engineers email??'
            },
            {    type: 'input',
                name: 'engineersGithub',
                Message: 'Whats the Engineers Github username?'
            },
         
            ]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineersGithub);
            teamArray.push(engineer);
            createTeam();
        });
    }

    const addIntern = () => {
        inquirer.prompt ([
            {    type: 'input',
                name: 'internName',
                Message: 'Whats the Interns name?'
            },
            {    type: 'input',
                name: 'internID',
                Message: 'Whats the Intern Identification Number?'
            },
            {    type: 'input',
                name: 'internEmail',
                Message: 'Whats the Interns email??'
            },
            {    type: 'input',
                name: 'internSchool',
                Message: 'Whats the Interns School?'
            },
         
            ]).then(answers => {
            const intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool);
            teamArray.push(intern);
            createTeam();
        });
    }
  
    let buildHtml = () => {
        console.log("Succefully Created")

        fs.writeFileSync('./dist/team.html', htmlOutput(teamArray), 'utf-8')
    }
    createTeam();

} 

runApplication();