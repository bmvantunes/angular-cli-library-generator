import { AngularCliWrapper } from '../../../ng-cli.wrapper';
import { asideComponent } from './aside.component';
import { demoComponent } from './demo.component';
import { demoModule } from './demo.module';

export async function writeDemoFilesToDisk(beginFile = '') {
  await AngularCliWrapper.deleteAndRecreateFolder('demo');
  await AngularCliWrapper.createFile('demo/demo.module.ts', beginFile + demoModule);
  await AngularCliWrapper.createFile('demo/aside.component.ts', beginFile + asideComponent);
  await AngularCliWrapper.createFile('demo/demo.component.ts', beginFile + demoComponent);
}
