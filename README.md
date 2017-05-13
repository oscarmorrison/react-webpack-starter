# react-webpack-starter
This is the best, basic, batteries included webpack, babel, react, scss,
starter repo available.

## file structure
```
.
├── LICENSE
├── README.md
├── package.json
├── src
│   ├── html
│   │   └── index.html
│   ├── js
│   │   ├── index.jsx
│   │   └── utilities
│   │       └── random.js
│   ├── package.json
│   ├── style
│   │   └── index.scss
│   └── yarn.lock
├── test
│   └── random.test.js
├── webpack.config.js
└── yarn.lock
```

## webpack setup
webpack has a basic setup, with autoprefixer, webpack copy plugin,
and separate webpack prod and dev config.

### jest (for testing)
a basic setup, with a utility file, and a 3 example unit tests

### babel
presets: `es2015`, `react`

### loaders
`style-loader`, `css-loader`, `postcss-loader`, `sass-loader`,
`file-loader`

### yarn 
this starter uses `yarn` by default, it includes the following yarn scripts:  
`watch`: ./node_modules/.bin/webpack -d --watch  
`dev`: ./node_modules/.bin/webpack-dev-server -d --hot --inline --progress --colors  
`build`: NODE_ENV=production ./node_modules/.bin/webpack -p  
`test`:  ./node_modules/.bin/jest  
`test:watch:`  ./node_modules/.bin/jest --watch  

## how to use
You can [download the repo here ](https://github.com/oscarmorrison/react-webpack-starter/archive/master.zip) t, and update the `package.json`.

Or alternative clone the repo:  
`git clone git@github.com:oscarmorrison/react-webpack-starter.git [new-project-name]`  
then delete the .git dir, or change the repository url
