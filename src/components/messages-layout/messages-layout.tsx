import { Component, Event, EventEmitter, Host, h } from '@stencil/core';

interface ConversationItem {
  id: string;
  name: string;
  status: 'NEW' | 'READ' | 'ARCHIVED' | 'REVOKED';
  chipLabel: string;
  text: string;
}

/** Simulovaný zoznam konverzácií (bez DB) – archivované sú v archive-layout */
const MOCK_CONVERSATIONS: ConversationItem[] = [
  { id: '1', name: 'Jano', status: 'NEW', chipLabel: 'NEW', text: 'Nová správa od kontaktu ...' },
  { id: '2', name: 'Peter', status: 'REVOKED', chipLabel: 'REVOKED', text: 'Nová správa od kontaktu ...' },
  { id: '3', name: 'Miro', status: 'ARCHIVED', chipLabel: 'ARCHIVED', text: 'Nová správa od kontaktu ...' },
  { id: '4', name: 'Martin', status: 'READ', chipLabel: 'READ', text: 'Nová správa od kontaktu ...' },
  { id: '5', name: 'Lukas', status: 'ARCHIVED', chipLabel: 'ARCHIVED', text: 'Nová správa od kontaktu ...' },
];

const activeConversations = MOCK_CONVERSATIONS.filter((c) => c.status !== 'ARCHIVED');

@Component({
  tag: 'messages-layout',
  styleUrl: 'messages-layout.css',
  shadow: true,
})
export class MessagesLayout {
  @Event({ bubbles: true, composed: true })
  contactSelect: EventEmitter<{ id: string; name: string }>;

  private handleContactClick = (id: string, name: string) => {
    this.contactSelect.emit({ id, name });
  };

  render() {
    return (
      <Host>
        <slot>
          <div class="div-layout">
            <div class="heading-container">
              <div class="head">
                <md-icon>message</md-icon>
                <h2 class="heading">Messages</h2>
              </div>
              <div class="actions">
                <md-elevated-button>+ New message</md-elevated-button>
              </div>
            </div>

            <div class="items-wrapper">
              <md-list>
                {activeConversations.map((conv, index) => (
                  <div key={conv.id}>
                    <div
                      class="conversation-row"
                      role="button"
                      tabIndex={0}
                      onClick={() => this.handleContactClick(conv.id, conv.name)}
                      onKeyDown={(e) => e.key === 'Enter' && this.handleContactClick(conv.id, conv.name)}
                    >
                      <list-item
                        chipLabel={conv.chipLabel}
                        status={conv.status}
                        name={conv.name}
                        text={conv.text}
                      ></list-item>
                    </div>
                    {index < activeConversations.length - 1 && <md-divider></md-divider>}
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
