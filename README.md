# react-webpack-starter
This is the best, basic, batteries included webpack, babel, react, scss,
starter repo available.

## file structure
```
*
|---.gitignore
|---LICENSE
|---README.md
|---package.json
|---webpack.config.js
|---yarn.lock
|---src
    |---js
        |---index.js
    |---html
        |---index.html
    |---style
        |---index.scss
```

## webpack setup
webpack has a basic setup, with autoprefixer, webpack copy plugin,
and separate webpack prod and dev config.

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
