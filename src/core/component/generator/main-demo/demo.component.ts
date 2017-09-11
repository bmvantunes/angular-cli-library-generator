export const demoComponent = `import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'nglg-demo',
  template: \`
    <nglg-aside></nglg-aside>

    <router-outlet></router-outlet>
  \`
})
export class DemoComponent { }
`;
