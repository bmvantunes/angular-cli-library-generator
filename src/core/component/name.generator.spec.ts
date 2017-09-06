import { INames } from './names.interface';
import { NameGenerator } from './name.generator';
import { expect } from 'chai';

describe('NameGenerator', () => {
  it('should transform "hello-world" correctly', () => {
    const result = NameGenerator.generate('hello-world');

    const expected: INames = {
      demo: {
        folderPath: 'components/hello-world/hello-world-demo',
        routingModulePath: 'components/hello-world/hello-world-demo-routing.module',
        moduleClassName: 'HelloWorldDemoModule',
        moduleFilePath: 'hello-world-demo.module',
        indexTs: 'components/hello-world/hello-world-demo/index.ts'
      },
      real: {
        folderPath: 'components/hello-world',
        componentClassName: 'HelloWorldComponent',
        moduleClassName: `HelloWorldModule`,
        componentFilePath: `hello-world.component`,
        moduleFilePath: `hello-world.module`,
        indexTs: 'components/hello-world/index.ts'
      }
    };

    expect(result).to.deep.equal(expected);
  });
});
