import { AngularCliWrapper } from '../../ng-cli.wrapper';
import { INames } from '../names.interface';
const replace = require('replace');

export class InnerDemoComponentGenerator {
  static async generate(paths: INames) {
    await InnerDemoComponentGenerator.generateModules(paths);
    await InnerDemoComponentGenerator.generateComponent(paths);
    await InnerDemoComponentGenerator.overrideRouteRoutingModule(paths);
    await InnerDemoComponentGenerator.overrideDemoHtmlFile(paths);
    await InnerDemoComponentGenerator.generateIndexFile(paths);
  }

  private static async generateModules(paths: INames) {
    const modulePath = paths.demo.folderFullPath;

    const params = ['g', 'm', modulePath, '--routing'];
    await AngularCliWrapper.run(params);
  }

  private static async generateComponent(paths: INames) {
    const componentPath = paths.demo.folderFullPath;
    const routingModulePath = paths.demo.routingModuleFullPath;

    const params = ['g', 'c', componentPath, '-m', routingModulePath, '-cd', 'Default', '-it', 'false', '-is', 'false'];
    await AngularCliWrapper.run(params);
  }

  private static async overrideRouteRoutingModule(paths: INames) {
    const path = `${process.cwd()}/src/app/${paths.demo.routingModuleFullPath}.ts`;
    const regex = /const routes\: Routes = \[\];/;
    const replacement =
      'const routes: Routes = [\n' +
      `  { path: '', component: ${paths.demo.componentClassName} }\n` +
      '];';

    replace({ regex, replacement, paths: [path], silent: true });
  }

  private static async overrideDemoHtmlFile(paths: INames) {
    const htmlFullPath = paths.demo.componentHtmlFullPath;
    const prefix = AngularCliWrapper.getAngularCliAppSettings().prefix;

    const realComponentSelector = `${prefix}-${paths.originalInput}`;
    const fileContent = `<${realComponentSelector}></${realComponentSelector}>`;

    await AngularCliWrapper.createFile(htmlFullPath, fileContent);
  }

  private static async generateIndexFile(paths: INames) {
    const indexTs = paths.demo.indexTs;
    const moduleClassName = paths.demo.moduleClassName;
    const moduleFilePath = paths.demo.moduleFilePath;

    await AngularCliWrapper.createFile(indexTs,
      `export { ${moduleClassName} } from './${moduleFilePath}';\n`
    );
  }
}
