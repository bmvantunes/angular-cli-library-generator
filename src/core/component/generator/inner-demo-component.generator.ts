import { AngularCliWrapper } from '../../ng-cli.wrapper';
import { INames } from '../names.interface';

export class InnerDemoComponentGenerator {
  static async generate(paths: INames) {
    await InnerDemoComponentGenerator.generateModules(paths);
    await InnerDemoComponentGenerator.generateComponent(paths);
    await InnerDemoComponentGenerator.generateIndexFile(paths);
  }

  private static async generateModules(paths: INames) {
    const modulePath = paths.demo.folderFullPath;

    const params = ['g', 'm', modulePath, '--routing'];
    return await AngularCliWrapper.run(params);
  }

  private static async generateComponent(paths: INames) {
    const componentPath = paths.demo.folderFullPath;
    const routingModulePath = paths.demo.routingModuleFullPath;

    const params = ['g', 'c', componentPath, '-m', routingModulePath, '-cd', 'Default', '-it', 'false'];
    return await AngularCliWrapper.run(params);
  }

  private static async generateIndexFile(paths: INames) {
    const indexTs = paths.demo.indexTs;
    const moduleClassName = paths.demo.moduleClassName;
    const moduleFilePath = paths.demo.moduleFilePath;

    return await AngularCliWrapper.createFile(indexTs,
      `export { ${moduleClassName} } from './${moduleFilePath}';\n`
    );
  }
}
