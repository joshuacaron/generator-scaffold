'use strict';
var yeoman = require('yeoman-generator');

module.exports = yeoman.Base.extend({
  prompting: function () {
    var done = this.async();

    var prompts = [
      {
        type: 'input',
        name: 'title',
        message: 'Project title',
        default: 'app'
      },
      {
        type: 'input',
        name: 'author',
        message: 'Author',
        store: true
      }
    ];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someOption;

      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'),
        {title: this.props.title, author: this.props.author}
      );
      this.fs.copy(
        this.templatePath('.babelrc'),
        this.destinationPath('.babelrc')
      );
      this.fs.copy(
        this.templatePath('webpack.config.js'),
        this.destinationPath('webpack.config.js')
      );
      this.fs.copy(
        this.templatePath('.eslintrc.json'),
        this.destinationPath('.eslintrc.json')
      );
      this.fs.copy(
        this.templatePath('.gitignore'),
        this.destinationPath('.gitignore')
      );
      this.fs.copy(
        this.templatePath('.jscsrc'),
        this.destinationPath('.jscsrc')
      );
      this.fs.copy(
        this.templatePath('.scss-lint.yml'),
        this.destinationPath('.scss-lint.yml')
      );
      this.fs.copy(
        this.templatePath('LICENCE'),
        this.destinationPath('LICENCE')
      );
    }
  },

  install: function () {
    this.npmInstall();
  }
});
