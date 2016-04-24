'use strict';
var yeoman = require('yeoman-generator');

module.exports = yeoman.Base.extend({

  prompting: function () {
    var done = this.async();
    // var prompts = [{
    //   type: 'confirm',
    //   name: 'someAnswer',
    //   message: 'Would you like to enable this option?',
    //   default: true
    // }];
    //
    // this.prompt(prompts, function (props) {
    //   this.props = props;
    //   // To access props later use this.props.someAnswer;
    //
    //   done();
    // }.bind(this));
  },

  writing: function () {
    var baseFiles = [
      '.babelrc',
      '.eslintrc.json',
      '.gitignore',
      '.jscsrc',
      '.scss-lint.yml',
      '.webpack.config.js',
      'package.json',
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
