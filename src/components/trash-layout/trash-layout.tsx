import { Component, Host, h } from '@stencil/core';

/** Simulovaná položka v koši (ukážka) */
const TRASH_ITEMS = [
  { id: 'trash-1', name: 'Anna Krajčírová', chipLabel: 'V KOŠI', text: 'Starý záznam – vymazaná komunikácia ...' },
];

@Component({
  tag: 'trash-layout',
  styleUrl: 'trash-layout.css',
  shadow: true,
})
export class TrashLayout {
  render() {
    return (
      <Host>
        <slot>
          <div class="div-layout">
            <div class="heading-container">
              <div class="head">
                <md-icon>delete</md-icon>
                <h2 class="heading">Kôš</h2>
              </div>
            </div>

            <div class="items-wrapper">
              <md-list>
                {TRASH_ITEMS.map((item) => (
                  <list-item
                    chipLabel={item.chipLabel}
                    status="REVOKED"
                    name={item.name}
                    text={item.text}
                  ></list-item>
                ))}
              </md-list>
            </div>
          </div>
        </slot>
      </Host>
    );
  }
}
