import { Component, Prop, h } from '@stencil/core';
import { Size } from '../../../utils/sizes.enum';

const btnClass = 'inline-flex items-center border border-transparent shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500';

const btnSizesClassMap: Map<Size, string> = new Map([
  [Size.xs, 'px-2.5 py-1.5 text-xs font-medium rounded'],
  [Size.sm, 'px-3 py-2 text-sm leading-4 font-medium rounded-md'],
  [Size.md, 'px-4 py-2 text-sm font-medium rounded-md'],
  [Size.lg, 'px-4 py-2 text-base font-medium rounded-md'],
  [Size.xl, 'px-6 py-3 text-base font-medium rounded-md'],
]) 

@Component({
  tag: 'tera-button',
  styleUrl: 'button.css',
  scoped: true,
})
export class TeraComponent {
  @Prop() size: Size = Size.md;


  render() {
    return (
      <button
        type="button"
        class={`${btnClass} ${btnSizesClassMap.get(this.size)}`}
      >
        <slot></slot>
      </button>
    );
  }
}
