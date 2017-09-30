import { AngularCliWrapper } from '../../ng-cli.wrapper';

export class MainDemoCopy {
  static async copyDemoFolder() {
    await AngularCliWrapper.deleteAndRecreateFolder('nglg');
    await AngularCliWrapper.copyFolder('blueprint-demo', 'nglg', '.txt');
  }
}
