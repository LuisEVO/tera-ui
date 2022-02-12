/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { defineCustomElements } from '@lvilcarromeroo/tera-ui-core/loader';
import { MyComponent, } from './directives/proxies';
defineCustomElements(window);
/** @type {?} */
var DECLARATIONS = [
    MyComponent,
];
var TeraUIModule = /** @class */ (function () {
    function TeraUIModule() {
    }
    TeraUIModule.decorators = [
        { type: NgModule, args: [{
                    declarations: DECLARATIONS,
                    exports: DECLARATIONS,
                    imports: [],
                    providers: [],
                },] },
    ];
    return TeraUIModule;
}());
export { TeraUIModule };
