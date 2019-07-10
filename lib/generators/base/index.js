const BasicGenerator = require('../../BasicGenerator');

class Generator extends BasicGenerator {
  prompting() {
    const prompts = [
      {
        name: 'addEditor',
        message: `添加.editorconfig配置文件`,
        type: 'confirm',
        default: true,
      },
      {
        name: 'addPrettier',
        message: `添加.prettierrc配置文件`,
        type: 'confirm',
        default: true,
      },
      {
        name: 'addPrettierI',
        message: `添加.prettierignore配置文件`,
        type: 'confirm',
        default: true,
      },
      {
        name: 'addBabel',
        message: `添加.babelrc配置文件`,
        type: 'confirm',
        default: true,
      },
      {
        name: 'addGit',
        message: `添加.gitignore配置文件`,
        type: 'confirm',
        default: true,
      },
      {
        name: 'addEslint',
        message: `添加.eslintrc配置文件`,
        type: 'confirm',
        default: true,
      },
      {
        name: 'addEslintI',
        message: `添加.eslintignore配置文件`,
        type: 'confirm',
        default: true,
      },
      {
        name: 'addNpmignore',
        message: `添加.npmignore配置文件`,
        type: 'confirm',
        default: true,
      },
      {
        name: 'addDocker',
        message: `添加.dockerignore配置文件`,
        type: 'confirm',
        default: true,
      },
    ];
    return this.prompt(prompts).then(props => {
      this.prompts = props;
    });
  }

  writing() {
    this.writeFiles({
      context: this.prompts,
      filterFiles: f => {
        if (!this.prompts.addEditor && f.indexOf('.editorconfig') > -1) return false;
        if (!this.prompts.addPrettier && f.indexOf('.prettierrc') > -1) return false;
        if (!this.prompts.addPrettierI && f.indexOf('.prettierignore') > -1) return false;
        if (!this.prompts.addBabel && f.indexOf('.babelrc') > -1) return false;
        if (!this.prompts.addGit && f.indexOf('.gitignore') > -1) return false;
        if (!this.prompts.addEslint && f.indexOf('.eslintrc') > -1) return false;
        if (!this.prompts.addEslintI && f.indexOf('.eslintignore') > -1) return false;
        if (!this.prompts.addNpmignore && f.indexOf('.npmignore') > -1) return false;
        if (!this.prompts.addDocker && f.indexOf('.dockerignore') > -1) return false;
        return true;
      },
    });
  }
}

module.exports = Generator;
