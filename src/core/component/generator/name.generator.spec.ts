import { INames } from '../names.interface';
import { NameGenerator } from './name.generator';
import { expect } from 'chai';

describe('NameGenerator', () => {
  it('should transform "hello-world" correctly', () => {
    const result = NameGenerator.generate('hello-world');

    const expected: INames = {
      originalInput: 'hello-world',
      demo: {
        folderFullPath: 'components/hello-world/hello-world-demo',
        componentClassName: 'HelloWorldDemoComponent',
        componentHtmlFullPath: 'components/hello-world/hello-world-demo/hello-world-demo.component.html',
        routingModuleFullPath: 'components/hello-world/hello-world-demo/hello-world-demo-routing.module',
        moduleClassName: 'HelloWorldDemoModule',
        moduleFilePath: 'hello-world-demo.module',
        indexTs: 'components/hello-world/hello-world-demo/index.ts'
      },
      real: {
        folderFullPath: 'components/hello-world',
        moduleFullPath: 'components/hello-world/hello-world.module',
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
