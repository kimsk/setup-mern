# Set up MongoDB, Express, React, NodeJS

## NodeJS
`npm init`

## Client (React, Babel, & Webpack)
https://www.npmjs.com/package/babel-loader

`npm install babel-loader babel-core babel-preset-es2015 babel-preset-react babel-preset-stage-0 webpack --save-dev`

`npm install react react-dom --save`

### [webpack.config.js](https://github.com/kimsk/setup-mern/blob/master/webpack.config.js)
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
  "server": "./node_modules/.bin/babel-node --presets es2015,stage-0 -- server.js"
},
```

### run nodemon
`./node_modules/.bin/nodemon`


## MongoDB
`npm install mongodb --save`


## Mocha & eslint

`npm install mocha eslint babel-eslint --save-dev`

```
"scripts": {
  "start": "./node_modules/.bin/babel-node --presets es2015,stage-0 -- server.js",
  "test": "./node_modules/.bin/mocha --compilers js:babel-core/register tests",
  "lint": "./node_modules/.bin/eslint web.config.js js"
},
```

### Run mocha
`npm test`

_note:_ 

1. `mocha --compilers js:babel-core/register` _uses babel to compile test before running tests_.
2. if tests need `stage-0` feature, add `stage-0` to `.babelrc`
3. `import 'babel-polyfill'` might be required.

### Run eslint
`npm run lint`

## Put together for Development mode

```
"scripts": {
  "start": "npm run clean && npm run lint && npm run webpack && npm run test && npm run server",
  "test": "./node_modules/.bin/mocha --reporter nyan --compilers js:babel-core/register tests",
  "server": "./node_modules/.bin/babel-node --presets es2015,stage-0 -- server.js",
  "lint": "./node_modules/.bin/eslint web.config.js js",
  "copy": "cp ./index.html public/index.html",
  "clean": "rm -rf public && mkdir public && npm run copy",
  "webpack": "./node_modules/.bin/webpack -d"
},
```

`./node_modules/.bin/nodemon`

## Production

### Transpile with Babel (Don't use babel-node)
`"build-server": "./node_modules/.bin/babel server.js -d build",`

#### babel-polyfill

- add `stage-0` to `.babelrc`
- automatically loaded with babel-node
- required for async/await

`npm install babel-polyfill --save`

`import "babel-polyfill";`

#### start server
`node ./build/server.js`

### Run node in Production mode
`export NODE_ENV=production`

### Enable GZip for express
`npm install compression --save`

```
import compression from 'compression';
...
app.use(compression());
```

