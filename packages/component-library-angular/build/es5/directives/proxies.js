/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone } from '@angular/core';
import { ProxyCmp } from './angular-component-lib/utils';
var MyComponent = /** @class */ (function () {
    function MyComponent(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    MyComponent.decorators = [
        { type: Component, args: [{
                    selector: 'my-component',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    inputs: ['first', 'last', 'middle']
                },] },
    ];
    /** @nocollapse */
    MyComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    MyComponent = tslib_1.__decorate([
        ProxyCmp({
            defineCustomElementFn: undefined,
            inputs: ['first', 'last', 'middle']
        }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], MyComponent);
    return MyComponent;
}());
export { MyComponent };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    MyComponent.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    MyComponent.prototype.z;
}
var TeraButton = /** @class */ (function () {
    function TeraButton(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    TeraButton.decorators = [
        { type: Component, args: [{
                    selector: 'tera-button',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    inputs: ['size']
                },] },
    ];
    /** @nocollapse */
    TeraButton.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    TeraButton = tslib_1.__decorate([
        ProxyCmp({
            defineCustomElementFn: undefined,
            inputs: ['size']
        }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], TeraButton);
    return TeraButton;
}());
export { TeraButton };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    TeraButton.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    TeraButton.prototype.z;
}
