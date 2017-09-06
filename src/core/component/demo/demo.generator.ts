import { AngularCliWrapper } from '../../ng-cli.wrapper';
import { INames } from '../names.interface';

export class DemoGenerator {
  static async generate(paths: INames) {
    await DemoGenerator.generateModules(paths.demo.folderPath);
    await DemoGenerator.generateComponent(paths.demo.folderPath, paths.demo.routingModulePath);
    await DemoGenerator.generateIndexFile(paths);
  }

  private static async generateModules(modulePath: string) {
    const params = ['g', 'm', modulePath, '--routing'];
    return await AngularCliWrapper.run(params);
  }

  private static async generateComponent(componentPath: string, routingModulePath: string) {
    const params = ['g', 'c', componentPath, '-m', routingModulePath, '-cd', 'OnPush'];
    return await AngularCliWrapper.run(params);
  }

  private static async generateIndexFile(paths: INames) {
    const indexTs = paths.demo.indexTs;
    const moduleClassName = paths.demo.moduleClassName;
    const moduleFilePath = paths.demo.moduleFilePath;

    return await AngularCliWrapper.createFile(indexTs,
      `import { ${moduleClassName} } from './${moduleFilePath}';\n\n` +
      `export { ${moduleClassName} };\n`
    );
  }
}
