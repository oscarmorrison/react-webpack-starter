# React, Webpack, Babel, Jest, ESLint Starter  
[![Build Status](https://travis-ci.org/oscarmorrison/react-webpack-starter.svg?branch=master)](https://travis-ci.org/oscarmorrison/react-webpack-starter)

This is the best, basic, batteries included webpack, babel, react, scss,
starter repo available.

## Overview:
### [React](https://facebook.github.io/react/):
a javascript library for building interfaces.  
- a basic setup, with an example index.jsx entry file. 

### [Webpack 2](https://webpack.js.org/):
a bundler for javascript and friends. Packs many modules into a few bundled assets. 
- an excellent, basic webpack setup with the essentials. 
- a production and a development configuration
- sensible loaders included:
  - **sass-loader**: convert your scss to css.
  - **babel-loader**: convert your es6 (ES2015) to js.
  - **file-loader**: copy accross any required assets
- copy plugin, to dynamically build your `dist` folder on each build


### [Babel](https://babeljs.io/):  
The compiler for writing next generation JavaScript. transpile your code from es6 to js.  

### [Jest](https://facebook.github.io/jest/):
Delightful JavaScript Testing.  
- Setup with sensible defaults, with 3 example unit tests.

### [ESLint](http://eslint.org/)
The pluggable linting utility for JavaScript and JSX.  
- A good eslint configuration extended from [Airbnb's](https://github.com/airbnb/javascript) eslint-config  

## file structure
```
.
├── LICENSE
├── README.md
├── package.json
├── webpack.config.js
├── yarn.lock
├── src
│   ├── html
│   │   └── index.html
│   ├── js
│   │   ├── index.jsx
│   │   └── utilities
│   │       └── general.js
│   └── style
│       └── index.scss
└── test
    └── generalUtility.test.js

```

### yarn 
this starter uses `yarn` by default, it includes the following yarn scripts:  
`watch`: ./node_modules/.bin/webpack -d --watch  
`dev`: ./node_modules/.bin/webpack-dev-server -d --hot --inline --progress --colors  
`build`: NODE_ENV=production ./node_modules/.bin/webpack -p  
`test`:  yarn test:jest && yarn lint  
`test:watch`:  yarn jest:watch && yarn lint:watch  
`test:jest`:  ./node_modules/.bin/jest  
`jest:watch`:  ./node_modules/.bin/jest --watch  
`lint`:  ./node_modules/.bin/eslint src/js test --ext .js --ext .jsx  
`lint:watch`:  ./node_modules/.bin/esw src/js test --ext .js --ext .jsx -w --color --clear

## how to use
You can [download the repo here](https://github.com/oscarmorrison/react-webpack-starter/archive/master.zip), and update the `package.json`.

Or alternative clone the repo:  
`git clone git@github.com:oscarmorrison/react-webpack-starter.git [new-project-name]`  
then delete the .git dir, or change the repository url
