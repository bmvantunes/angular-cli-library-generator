import * as fs from 'fs';
import * as path from 'path';
import { AngularCliWrapper } from '../../ng-cli.wrapper';

export class OuterIndexComponentGenerator {
  static async generate() {
    const imports = OuterIndexComponentGenerator.getImports();
    const information = OuterIndexComponentGenerator.getInformationAutoGenerated();
    await AngularCliWrapper.createFile('index.ts', information + imports);
  }

  private static getImports(): string {
    const directories = OuterIndexComponentGenerator.getDirectories();
    return directories.map((item: string) => {
      return `export * from './${item}';\n`;
    }).join('');
  }

  private static getDirectories() {
    const srcPath = `${process.cwd()}/src/app/components`;
    return fs.readdirSync(srcPath)
      .filter((file: any) => fs.statSync(path.join(srcPath, file)).isDirectory());
  }

  private static getInformationAutoGenerated() {
    return [
      '/***************************************************************',
      ' ***************************************************************',
      ' ***************** This code was generated by ******************',
      ' **************** angular-cli-library-generator ****************',
      ' * https://www.npmjs.com/package/angular-cli-library-generator *',
      ' ***************************************************************',
      ' ***************************************************************',
      ' ****** Changes to this file may cause incorrect behavior ******',
      ' ********* and will be lost if the code is regenerated *********',
      ' ***************************************************************',
      ' ***************************************************************/\n\n\n'
    ].join('\n');
  }
}