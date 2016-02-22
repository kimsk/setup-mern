# Set up MongoDB, Express, React, NodeJS

## NodeJS
`npm init`

## Client (React, Babel, & Webpack)
https://www.npmjs.com/package/babel-loader

`npm install babel-loader babel-core babel-preset-es2015 babel-preset-react babel-preset-stage-0 webpack --save-dev`

`npm install react react-dom --save`

### webpack.config.js
```
module:{
  loaders: [
    {
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/,
      query: {
        presets: ['react', 'es2015', 'stage-0']
      }
    }
  ]
}
```

### run webpack (watch & source map)
`webpack -wd`


## Server (Express, babel-cli, & nodemon)
`npm install express --save`

`npm install babel-cli nodemon --save-dev`

### package.json
```
"scripts": {
  "start": "./node_modules/.bin/babel-node --presets es2015,stage-0 -- server.js"
},
```

### run nodemon
`./node_modules/.bin/nodemon`


## MongoDB
`npm install mongodb --save`
