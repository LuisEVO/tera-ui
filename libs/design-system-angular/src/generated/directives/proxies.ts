/* eslint-disable @angular-eslint/component-class-suffix */
/* eslint-disable @angular-eslint/no-inputs-metadata-property */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@tera-sd/core';




export declare interface TeraButton extends Components.TeraButton {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['color', 'rounded', 'size']
})
@Component({
  selector: 'tera-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'rounded', 'size']
})
export class TeraButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
