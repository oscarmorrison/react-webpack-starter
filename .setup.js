/* eslint no-console:0 */
/* This is a setup file for the react-webpack-starter
 * this file should be automatically removed after running
 * `yarn run setup`
*/

const fs = require('fs');
const exec = require('child_process').exec;
let packageJSON = require('./package.json');


const writeFile = (json) => new Promise((resolve, reject) => {
    json = JSON.stringify(packageJSON, null, 2);
    fs.writeFile('package.json', json, 'utf8', (data) => {
        resolve(data);
    });
});


const updatePackageJSON = () => {
    packageJSON.name = '';
    packageJSON.description = '';
    packageJSON.version = '0.0.1';
    packageJSON.author = '';
    delete packageJSON.repository;
    delete packageJSON.bugs;
    delete packageJSON.homepage;
    delete packageJSON.scripts.setup;
    writeFile(packageJSON).then(data => cleanUp());
};

const cleanUp = () => {
    console.log('cleanUp');
    console.log('remove git');
    exec('rm -rf .git');
    console.log('initializing new git');
    exec('git init');
    console.log('remove setup file');
    exec('rm .setup.js');
    process.exit();
}

updatePackageJSON();
