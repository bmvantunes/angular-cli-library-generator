import { NameGenerator } from './generator/name.generator';
import { InnerDemoComponentGenerator } from './generator/inner-demo-component.generator';
import { InnerRealComponentGenerator } from './generator/inner-real-component.generator';
import { OuterIndexComponentGenerator } from './generator/outer-index-component.generator';

export class ComponentMain {
  async create(name: string) {
    const path = NameGenerator.generate(name);
    await InnerDemoComponentGenerator.generate(path);
    await InnerRealComponentGenerator.generate(path);
    await OuterIndexComponentGenerator.generate();
  }
}
