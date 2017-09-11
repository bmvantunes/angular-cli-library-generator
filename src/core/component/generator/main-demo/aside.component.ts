export const asideComponent = `import { Component } from '@angular/core';

import { ROUTES } from './demo.routes';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'nglg-aside',
  template: \`
    <div *ngFor="let route of routes">
      <a [routerLink]="[ route.path ]">{{ route.path }}</a>
    </div>
  \`
})
export class AsideComponent {
  routes = ROUTES;
}
`;
