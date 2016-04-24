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
      this.template('_package.json', 'package.json',
        {title: this.props.title, author: this.props.author}
      );

      var baseFiles = [
        'webpack.config.js',
        '.babelrc',
        '.eslintrc.json',
        '.gitignore',
        '.jscsrc',
        '.scss-lint.yml',
        'LICENCE'
      ];

      for (var i = 0; i < baseFiles.length; ++i) {
        this.copy(baseFiles[i], baseFiles[i]);
      }
    }
  },

  install: function () {
    this.npmInstall();
  }
});
