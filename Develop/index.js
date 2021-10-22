// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: titleInput => {
          if (titleInput) {
            return true;
          } 
          else {
            console.log('Please enter a title');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Briefly describe your project',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } 
          else {
            console.log('Please enter a description');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Describe how to use this application',
        validate: usageInput => {
            if (usageInput) {
                return true;
            }
            else {
                console.log('Please describe how to use');
                return false;
            }
        }
      },
      {
        type: 'confirm',
        name: 'confirmInstallation',
        message: ' Would you like to desrcibe the installation process, if there is one?'
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Describe the installation process, if there is one',
        when: ({confirmInstallation}) => confirmInstallation

      },
      {
        type: 'confirm',
        name: 'confirmContributing',
        message: 'Would you like to add a contributions section to your README?',
       
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Please describe contributions to this application',
        when: ({confirmContributing}) => confirmContributing
      },
      {
        type: 'confirm',
        name: 'confirmLicense',
        message: 'Would you like to add a license to your applications README?',
        deafult: false
      },
      {
        type: 'checkbox',
        name: 'license',
        message: 'Please choose from below',
        choices: 
      }
      {
        type: 'input',
        name: 'github',
        message: 'What is your github username?'
      }
    ])
  };

// TODO: Create a function to write README file


// TODO: Create a function to initialize app
function init() {
  promptUser()
}

// Function call to initialize app
init();
