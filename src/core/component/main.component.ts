import { DemoGenerator } from './demo/demo.generator';

export class ComponentMain {
  async create(name: string) {
    await DemoGenerator.generate(name);
  }
}
