import { DemoGenerator } from './demo/demo.generator';
import { NameGenerator } from './name.generator';
import { RealGenerator } from './demo/real.generator';

export class ComponentMain {
  async create(name: string) {
    const path = NameGenerator.generate(name);
    await DemoGenerator.generate(path);
    await RealGenerator.generate(path);
  }
}
