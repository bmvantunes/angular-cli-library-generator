const resolveNpm = require('resolve');
const spawn = require('child_process').spawn;
const fs = require('fs');

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
}
