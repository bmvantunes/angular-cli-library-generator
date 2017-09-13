import { AngularCliWrapper } from '../../ng-cli.wrapper';

export class MainDemoCopy {
  static async copyDemoFolder() {
    await AngularCliWrapper.deleteAndRecreateFolder('demo');
    await AngularCliWrapper.copyFolder('blueprint-demo', 'demo', '.txt');
  }
}
