import { AngularCliWrapper } from '../../ng-cli.wrapper';
import { INames } from '../names.interface';

export class InnerRealComponentGenerator {
  static async generate(paths: INames) {
    await InnerRealComponentGenerator.generateModules(paths);
    await InnerRealComponentGenerator.generateComponent(paths);
    await InnerRealComponentGenerator.generateIndexFile(paths);
  }

  private static async generateModules(paths: INames) {
    const modulePath = paths.real.folderFullPath;
    const moduleDemoRoutingPath = paths.demo.routingModuleFullPath;

    const params = ['g', 'm', modulePath, '-m', moduleDemoRoutingPath];
    return await AngularCliWrapper.run(params);
  }

  private static async generateComponent(paths: INames) {
    const componentPath = paths.real.folderFullPath;
    const moduleFullPath = paths.real.moduleFullPath;

    const params = ['g', 'c', componentPath, '-m', moduleFullPath, '--export', 'true', '-cd', 'OnPush', '-it', 'false', '-is', 'false'];
    return await AngularCliWrapper.run(params);
  }

  private static async generateIndexFile(paths: INames) {
    const indexTs = paths.real.indexTs;
    const moduleClassName = paths.real.moduleClassName;
    const moduleFilePath = paths.real.moduleFilePath;
    const componentClassName = paths.real.componentClassName;
    const componentFilePath = paths.real.componentFilePath;

    return await AngularCliWrapper.createFile(indexTs,
      `export { ${moduleClassName} } from './${moduleFilePath}';\n` +
      `export { ${componentClassName} } from './${componentFilePath}';\n`
    );
  }
}
