'use strict';
var yeoman = require('yeoman-generator');

module.exports = yeoman.Base.extend({
  configuring: function () {
    console.log('Writing dotfiles.');
    this.fs.copy(
      this.templatePath('LICENCE'),
      this.destinationPath('LICENCE')
    );
    this.fs.copy(
      this.templatePath('webpack.config.js'),
      this.destinationPath('webpack.config.js')
    );
    this.fs.copy(
      this.templatePath('.scss-lint.yml'),
      this.destinationPath('.scss-lint.yml')
    );
    this.fs.copy(
      this.templatePath('.jscsrc'),
      this.destinationPath('.jscsrc')
    );
    this.fs.copy(
      this.templatePath('.gitignore'),
      this.destinationPath('.gitignore')
    );
    this.fs.copy(
      this.templatePath('.eslintrc.json'),
      this.destinationPath('.eslintrc.json')
    );
    this.fs.copy(
      this.templatePath('.babelrc'),
      this.destinationPath('.babelrc')
    );
  }

  // install: function () {
  //   this.installDependencies();
  // }
});
