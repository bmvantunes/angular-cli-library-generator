import { INames } from './names.interface';

const pathStart = 'components';

export class NameGenerator {
  static generate(name: string): INames {
    const casings = NameGenerator.getAllCasings(name);

    const demo = `${pathStart}/${casings.dashCase}/${casings.dashCase}-demo`;
    const real = `${pathStart}/${casings.dashCase}`;

    return {
      demo: {
        folderPath: demo,
        routingModulePath: `${demo}-routing.module`,
        moduleClassName: `${casings.pascalCase}DemoModule`,
        moduleFilePath: `${casings.dashCase}-demo.module`,
        indexTs: `${demo}/index.ts`
      },
      real: {
        folderPath: real,
        componentClassName: `${casings.pascalCase}Component`,
        moduleClassName: `${casings.pascalCase}Module`,
        componentFilePath: `${casings.dashCase}.component`,
        moduleFilePath: `${casings.dashCase}.module`,
        indexTs: `${real}/index.ts`
      }
    };
  }

  static getAllCasings(dashCase: string) {
    dashCase = dashCase.toLowerCase();
    const camelCase = dashCase.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
    const pascalCase = camelCase.charAt(0).toUpperCase() + camelCase.slice(1);

    return {
      dashCase: dashCase,
      pascalCase: pascalCase
    };
  }
}
