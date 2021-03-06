const resolveNpm = require('resolve');
const spawn = require('child_process').spawn;
const fs = require('fs');
const jsonfile = require('jsonfile');
const rimraf = require('rimraf');
const mkdirp = require('mkdirp');
const ncp = require('ncp');
const path = require('path');

export class AngularCliWrapper {
  static run(commands: string[]): Promise<void> {
    return new Promise((resolve, reject) => {

      const location = resolveNpm.sync('@angular/cli/bin/ng', { basedir: process.cwd() });

      spawn(location, commands, { stdio: 'inherit' }).on('exit', (error: any) => {
        if (error) {
          console.error('Something went wrong!!');
          process.exit(-1);
          reject();
        }

        resolve();
      });
    });
  }

  static createFile(file: string, content: string) {
    return new Promise((resolve, reject) => {
      fs.writeFile(`${process.cwd()}/src/app/${file}`, content, (error: any) => {
        if (error) {
          console.error(`Error creating ${file}`);
          process.exit(-1);
          reject();
        }

        console.log(`${file} written to disk`);
        resolve();
      });
    });
  }

  static deleteAndRecreateFolder(folderPath: string) {
    const path = `${process.cwd()}/src/app/${folderPath}`;
    return new Promise((resolve, reject) => {
      rimraf(path, () => {
        mkdirp(path, (err: any) => {
          if (err) {
            console.error(`Error creating ${path} folder`);
            process.exit(-1);
            reject();
          }

          console.log(`${path} folder created`);
          resolve();
        });
      });
    });
  }

  static copyFolder(source: string, destination: string, replaceFileType: string) {
    const src = path.join(__dirname, '../../', source);
    const dest = `${process.cwd()}/src/app/${destination}`;
    return new Promise((resolve, reject) => {
      ncp(src, dest, {
        rename: (name: string) => name.replace(replaceFileType, '')
      }, (err: any) => {
        if (err) {
          console.error(`Error copying ${src} to ${dest}`, err);
          process.exit(-1);
          reject();
        }
        console.log('Folder copied!');
        resolve();
      });
    });
  }

  static getAngularCliAppSettings() {
    return jsonfile.readFileSync(`${process.cwd()}/.angular-cli.json`).apps[0];
  }
}
