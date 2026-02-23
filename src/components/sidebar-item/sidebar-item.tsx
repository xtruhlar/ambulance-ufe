import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'sidebar-item',
  styleUrl: 'sidebar-item.css',
  shadow: true,
})
export class SidebarItem {
  @Prop() label: string;
  @Prop() icon: string;
  @Prop() isActive = false;

  render() {
    const icon = (this.icon || '').trim();
    const isSvgIcon = icon.startsWith('<svg');

    return (
      <Host>
        <slot>
          <div
            class={{
              'sidebar-item-container': true,
              'is-active': this.isActive,
            }}
          >
            <md-icon class="item-icon" innerHTML={isSvgIcon ? icon : null}>
              {!isSvgIcon ? icon : null}
            </md-icon>
            <span class="item-text">{this.label}</span>
          </div>
        </slot>
      </Host>
    );
  }
}
