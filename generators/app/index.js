'use strict';
var yeoman = require('yeoman-generator');

module.exports = yeoman.Base.extend({
  configuring: function () {
    var baseFiles = [
      '.babelrc',
      '.eslintrc.json',
      '.gitignore',
      '.jscsrc',
      '.scss-lint.yml',
      'webpack.config.js',
      'LICENCE'
    ];
    for (var i = 0; i < baseFiles.length; ++i) {
      var file = baseFiles[i];
      this.fs.copy(
        this.templatePath(file),
        this.destinationPath(file)
      );
    }
  }

  // install: function () {
  //   this.installDependencies();
  // }
});
