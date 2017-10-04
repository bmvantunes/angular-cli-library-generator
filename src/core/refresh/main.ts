import { MainDemoCopy } from '../component/generator/main-demo.copy';
import { OuterComponentGenerator } from '../component/generator/outer-component.generator';

export class RefreshMain {
  async refresh(name: string) {
    await MainDemoCopy.copyDemoFolder();
    await OuterComponentGenerator.generate();
  }
}
