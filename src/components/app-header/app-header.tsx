import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-header',
  styleUrl: 'app-header.css',
  shadow: true,
})
export class AppHeader {
  render() {
    return (
      <Host>
        <slot>
          <div class="box-container">
            <md-icon class="logo-icon">
              <svg width="44" height="40" viewBox="0 0 44 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.8974 1.36754C17.6251 0.55086 16.8609 0 16 0C15.1391 0 14.3749 0.55086 14.1026 1.36754L8.55848 18H2C0.895431 18 0 18.8954 0 20C0 21.1046 0.895431 22 2 22H10C10.8609 22 11.6251 21.4491 11.8974 20.6325L16 8.32456L26.1026 38.6325C26.3749 39.4491 27.1391 40 28 40C28.8609 40 29.6251 39.4491 29.8974 38.6325L35.4415 22H42C43.1046 22 44 21.1046 44 20C44 18.8954 43.1046 18 42 18H34C33.1391 18 32.3749 18.5509 32.1026 19.3675L28 31.6754L17.8974 1.36754Z" fill="#4A5468"/>
              </svg>
            </md-icon>
            <span class="header-title-text">Ambulance</span>
          </div>
        </slot>
      </Host>
    );
  }
}
