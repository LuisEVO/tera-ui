import { NgModule } from '@angular/core';
import { defineCustomElements } from '@lvilcarromeroo/tera-ui-core/loader';

import {
  TeraButton
} from '../generated/directives/proxies';

defineCustomElements(window);

const DECLARATIONS = [
  TeraButton
];

@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
})
export class DesignSystemAngularModule {}
