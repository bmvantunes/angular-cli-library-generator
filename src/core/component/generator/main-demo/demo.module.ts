export const demoModule = `import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AsideComponent } from './aside.component';
import { DemoComponent } from './demo.component';
import { ROUTES } from './demo.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [
    DemoComponent,
    AsideComponent
  ],
  exports: [
    DemoComponent
  ]
})
export class DemoModule { }
`;
