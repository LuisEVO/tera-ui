import { NgModule } from '@angular/core';
import { defineCustomElements } from '@lvilcarromeroo/tera-ui-core/loader';

import {
  MyComponent,
} from './directives/proxies';

defineCustomElements(window);

const DECLARATIONS = [
  MyComponent,
];

@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
  imports: [],
  providers: [],
})
export class TeraUIModule {}
