#! /usr/bin/env node
var fs = require('fs');
var path = require('path');

var baseFiles = {
  'gitignore': '.gitignore',
  'babelrc': '.babelrc',
  'eslintrc.json': '.eslintrc.json',
  'jscsrc': '.jscsrc',
  'scss-lint.yml': '.scss-lint.yml',
  'LICENCE' : 'LICENCE',
  'webpack.config.js': 'webpack.config.js'
};

var runningPath = process.cwd();
var currentPath = __dirname;

console.log('Writing files...');

var keys = Object.keys(baseFiles);
for (var i = 0; i < keys.length; ++i) {
  var sourceName = keys[i];
  var destName = baseFiles[keys[i]];

  var sourcePath = path.join(currentPath, 'templates', sourceName);
  var destPath = path.join(runningPath, destName);

  var data = fs.readFileSync(sourcePath).toString();

  if (data.length === 0) {
    console.log('Warning - Empty file: ' + destName);
  }
  fs.writeFileSync(destPath, data);

  console.log('Finished: ' + destName);
}

console.log('Done.');
