import { NgModule } from '@angular/core';
import { defineCustomElements } from '@tera-sd/core/loader';

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
export class TeraSDModule {}
