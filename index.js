#! /usr/bin/env node
var fs = require('fs');
var path = require('path');

var baseFiles = [
  '.gitignore',
  '.babelrc',
  '.eslintrc.json',
  '.jscsrc',
  '.scss-lint.yml',
  'LICENCE',
  'webpack.config.js'
];

var runningPath = process.cwd();
var currentPath = __dirname;

console.log('Writing files...');

for (var i = 0; i < baseFiles.length; ++i) {
  var file = baseFiles[i];

  var data = fs.readFileSync(path.join(currentPath, 'templates', file));
  fs.writeFileSync(path.join(runningPath, file));

  console.log('Finished: ' + file);
}

console.log('Finished scaffolding project.');
