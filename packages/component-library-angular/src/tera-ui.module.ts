import { NgModule } from '@angular/core';
import { defineCustomElements } from '@lvilcarromeroo/tera-ui-core/loader';

import {
  MyComponent,
  TeraButton
} from './directives/proxies';

defineCustomElements(window);

const DECLARATIONS = [
  MyComponent,
  TeraButton
];

@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
  imports: [],
  providers: [],
})
export class TeraUIModule {}
