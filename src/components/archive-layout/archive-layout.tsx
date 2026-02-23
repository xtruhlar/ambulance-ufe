import { Component, Host, h } from '@stencil/core';

/** Archivované správy (presunuté z messages-layout) */
const ARCHIVED_CONVERSATIONS = [
  { id: '3', name: 'Miro', chipLabel: 'ARCHIVED', text: 'Nová správa od kontaktu ...' },
  { id: '5', name: 'Lukas', chipLabel: 'ARCHIVED', text: 'Nová správa od kontaktu ...' },
];

@Component({
  tag: 'archive-layout',
  styleUrl: 'archive-layout.css',
  shadow: true,
})
export class ArchiveLayout {
  render() {
    return (
      <Host>
        <slot>
          <div class="div-layout">
            <div class="heading-container">
              <div class="head">
                <md-icon>archive</md-icon>
                <h2 class="heading">Archive</h2>
              </div>
            </div>

            <div class="items-wrapper">
              <md-list>
                {ARCHIVED_CONVERSATIONS.map((conv, index) => (
                  <div key={conv.id}>
                    <list-item
                      chipLabel={conv.chipLabel}
                      status="ARCHIVED"
                      name={conv.name}
                      text={conv.text}
                    ></list-item>
                    {index < ARCHIVED_CONVERSATIONS.length - 1 && <md-divider></md-divider>}
                  </div>
                ))}
              </md-list>
            </div>
          </div>
        </slot>
      </Host>
    );
  }
}
