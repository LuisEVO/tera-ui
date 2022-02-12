/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { defineCustomElements } from '@lvilcarromeroo/tera-ui-core/loader';
import { MyComponent, } from './directives/proxies';
defineCustomElements(window);
/** @type {?} */
const DECLARATIONS = [
    MyComponent,
];
export class TeraUIModule {
}
TeraUIModule.decorators = [
    { type: NgModule, args: [{
                declarations: DECLARATIONS,
                exports: DECLARATIONS,
                imports: [],
                providers: [],
            },] },
];
