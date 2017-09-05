const resolveNpm = require('resolve');
const spawn = require('child_process').spawn;

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
}
