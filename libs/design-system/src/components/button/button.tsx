import { Component, Prop, h } from '@stencil/core';
import { Color } from '../../types/color.type';
import { Size } from '../../types/sizes.type';

@Component({
  tag: 'tera-button',
  styleUrl: 'button.scss',
  shadow: false,
})
export class TeraComponent {
  @Prop() size: Size = 'md';

  @Prop() color: Color = 'default';

  @Prop() rounded: boolean = false;

  render() {
    const className = `tera-button tera-button--${this.size} tera-button--${this.color}`;
    return (
      <button
        type="button"
        class={{
          [className]: true,
          'tera-button--rounded': this.rounded
        }}
      >
        <slot></slot>
      </button>
    );
  }
}
