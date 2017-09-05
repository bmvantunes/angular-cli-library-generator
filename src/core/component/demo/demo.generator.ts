import { AngularCliWrapper } from '../../ng-cli.wrapper';

export class DemoGenerator {
  static async generate(name: string) {
    const names = DemoGenerator.getDemoNames(name);
    await DemoGenerator.generateModules(names.fullPath);
    await DemoGenerator.generateComponent(names.fullPath, names.routingModulePath);
  }

  static getDemoNames(name: string) {
    const fullPath = `components/${name}/${name}-demo/${name}-demo`;

    return {
      fullPath: fullPath,
      routingModulePath: `${fullPath}-routing`
    };
  }

  private static async generateModules(modulePath: string) {
    const params = ['g', 'm', modulePath, '--routing'];
    return await AngularCliWrapper.run(params);
  }

  private static async generateComponent(componentPath: string, routingModulePath: string) {
    const params = ['g', 'c', componentPath, '-m', routingModulePath, '-cd', 'OnPush'];
    return await AngularCliWrapper.run(params);
  }
}
