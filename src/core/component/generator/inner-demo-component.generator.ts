import { AngularCliWrapper } from '../../ng-cli.wrapper';
import { INames } from '../names.interface';

export class InnerDemoComponentGenerator {
  static async generate(paths: INames) {
    await InnerDemoComponentGenerator.generateModule(paths);
    await InnerDemoComponentGenerator.generateComponent(paths);
    await InnerDemoComponentGenerator.generateIndexFile(paths);
  }

  private static async generateModule(paths: INames) {
    const modulePath = paths.demo.folderFullPath;

    const params = ['g', 'm', modulePath];
    return await AngularCliWrapper.run(params);
  }

  private static async generateComponent(paths: INames) {
    const componentPath = paths.demo.folderFullPath;
    const moduleFullPath = paths.demo.moduleFullPath;

    const params = ['g', 'c', componentPath, '-m', moduleFullPath, '-cd', 'Default', '-it', 'false'];
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
