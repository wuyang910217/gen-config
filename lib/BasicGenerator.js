const Generator = require('yeoman-generator');
const glob = require('glob');
const { statSync } = require('fs');
const { basename, join, resolve } = require('path');
const debug = require('debug')('create-umi:BasicGenerator');

function noop() {
  return true;
}

class BasicGenerator extends Generator {
  constructor(opts) {
    super(opts);
    this.opts = opts;
    this.name = basename(opts.env.cwd);
  }

  isTsFile(f) {
    return f.endsWith('.ts') || f.endsWith('.tsx') || ['tsconfig.json', 'tslint.yml'].includes(f);
  }

  writeFiles({ context, filterFiles = noop }) {
    debug(`context: ${JSON.stringify(context)}`);
    const tPath = resolve(this.templatePath(), '../../.templates');
    glob
      .sync('./*', {
        cwd: tPath,
        dot: true,
      })
      .filter(filterFiles)
      .forEach(file => {
        const filePath = join(tPath, file);
        if (statSync(filePath).isFile()) {
          this.fs.copyTpl(filePath, this.destinationPath(file.replace(/^_/, '.')), context);
        }
      });
  }
}

module.exports = BasicGenerator;
