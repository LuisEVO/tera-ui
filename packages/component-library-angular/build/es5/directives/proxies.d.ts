import { ChangeDetectorRef, ElementRef, NgZone } from '@angular/core';
import { Components } from '@lvilcarromeroo/tera-ui-core';
export declare interface MyComponent extends Components.MyComponent {
}
export declare class MyComponent {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface TeraButton extends Components.TeraButton {
}
export declare class TeraButton {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
