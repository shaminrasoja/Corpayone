# Corpay One QA Challenge

## Pre Requisites
1. Install [Node js](https://nodejs.org/en/download/) (support: Node.js 8 and above)
2. Install npm
3. Install [Cypress] (https://www.cypress.io/) (above version 10)

## UI Test execution

1. Git Clone the Repo with the master branch for the the specified location
    >git clone https://github.com/shaminrasoja/Corpayone
    
2. >cd Corpay 

3. Install all the dependencies specified in the package.json file via npm by executing below command by being in the folder location specified in below
    > npm install
    
4. Install Cypress via npm

    * cd /your/project/path

    * npm install cypress --save-dev
    
   This will install Cypress locally as a dev dependency for your project.

5. Execute the Cypress Automation Test Suite by executing the below command below
    * Headless
        > npm run test
    * Headed
        > npx cypress open
        
## Results
![alt text](https://github.com/shaminrasoja/Corpayone/blob/master/results.png)
