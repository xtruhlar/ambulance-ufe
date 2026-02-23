import { Component, Event, EventEmitter, Host, h, Prop } from '@stencil/core';

export interface ChatContact {
  id: string;
  name: string;
}

interface ChatMessage {
  id: string;
  text: string;
  fromMe: boolean;
  time: string;
}

/** Simulované správy pre demo (bez DB) */
const MOCK_MESSAGES: Record<string, ChatMessage[]> = {
  '1': [
    { id: 'm1', text: 'Dobrý deň, potreboval by som objednať na kontrolu.', fromMe: false, time: '9:00' },
    { id: 'm2', text: 'Dobrý deň, máme voľný termín v piatok o 10:00.', fromMe: true, time: '9:15' },
    { id: 'm3', text: 'Perfektné, piatok 10:00 mi vyhovuje. Ďakujem.', fromMe: false, time: '9:20' },
  ],
  '2': [
    { id: 'm4', text: 'Kedy mám prísť na odber krvi?', fromMe: false, time: '8:30' },
    { id: 'm5', text: 'Odbery sú v utorok a štvrtok 7–9. Príďte nalačno.', fromMe: true, time: '8:45' },
  ],
  '3': [
    { id: 'm6', text: 'Potvrdzujem termín na zajtra 14:00.', fromMe: true, time: 'včera' },
    { id: 'm7', text: 'Ďakujem, teším sa.', fromMe: false, time: 'včera' },
  ],
};

const CHAT_LAYOUT_STYLES = `
:host {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.div-layout {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}
.chat-header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border-bottom: 1px solid var(--md-sys-color-outline-variant, #ccc);
  flex-shrink: 0;
  background: var(--md-sys-color-surface, #fafafa);
}
.back-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: transparent;
  color: var(--md-sys-color-on-surface, #1a1a1a);
  cursor: pointer;
}
.back-button:hover {
  background: var(--md-sys-color-surface-container-highest, #e6e0e9);
}
.back-button md-icon { font-size: 24px; }
.chat-header-info { display: flex; flex-direction: column; gap: 2px; }
.chat-title {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--md-sys-color-on-surface, #1a1a1a);
}
.chat-subtitle {
  font-size: 0.875rem;
  color: var(--md-sys-color-on-surface-variant, #49454f);
}
.messages-wrapper {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
}
.message-list {
  --md-list-container-color: transparent;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.message-row { display: flex; justify-content: flex-start; }
.message-row--me { justify-content: flex-end; }
.message-bubble {
  max-width: 75%;
  padding: 10px 14px;
  border-radius: 16px;
  background: var(--md-sys-color-surface-container-high, #ece6f0);
  color: var(--md-sys-color-on-surface, #1a1a1a);
}
.message-row--me .message-bubble {
  background: var(--md-sys-color-primary-container, #d5e4f7);
  color: var(--md-sys-color-on-primary-container, #001c47);
}
.message-text { font-size: 0.9375rem; line-height: 1.4; }
.message-time {
  display: block;
  font-size: 0.75rem;
  color: var(--md-sys-color-on-surface-variant, #49454f);
  margin-top: 4px;
}
.message-row--me .message-time {
  color: var(--md-sys-color-on-primary-container);
  opacity: 0.8;
}
.chat-footer {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  border-top: 1px solid var(--md-sys-color-outline-variant, #ccc);
  flex-shrink: 0;
  background: var(--md-sys-color-surface, #fafafa);
}
.message-input {
  flex: 1;
  padding: 12px 16px;
  border: 1px solid var(--md-sys-color-outline, #79747e);
  border-radius: 24px;
  font-size: 1rem;
  font-family: inherit;
  outline: none;
}
.message-input:focus {
  border-color: var(--md-sys-color-primary, #2d82dc);
  border-width: 2px;
}
.send-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: var(--md-sys-color-primary, #2d82dc);
  color: var(--md-sys-color-on-primary, #fff);
  cursor: pointer;
}
.send-button:hover { opacity: 0.9; }
.send-button md-icon { font-size: 24px; }
.empty-state {
  padding: 24px;
  text-align: center;
  color: var(--md-sys-color-on-surface-variant, #49454f);
  font-size: 0.9375rem;
}
`;

@Component({
  tag: 'chat-layout',
  styles: CHAT_LAYOUT_STYLES,
  shadow: true,
})
export class ChatLayout {
  /** Kontakt (pacient) – z messages-layout */
  @Prop() contact: ChatContact | null = null;

  @Event({ bubbles: true, composed: true })
  back: EventEmitter<void>;

  private get messages(): ChatMessage[] {
    if (!this.contact?.id) return [];
    return MOCK_MESSAGES[this.contact.id] ?? [];
  }

  private handleBack = () => {
    this.back.emit();
  };

  render() {
    if (!this.contact) {
      return (
        <Host>
          <div class="div-layout">
            <p class="empty-state">Vyberte konverzáciu zo zoznamu správ.</p>
          </div>
        </Host>
      );
    }

    return (
      <Host>
        <slot>
          <div class="div-layout">
            <div class="chat-header">
              <button type="button" class="back-button" onClick={this.handleBack} aria-label="Späť na zoznam">
                <md-icon>arrow_back</md-icon>
              </button>
              <div class="chat-header-info">
                <h2 class="chat-title">{this.contact.name}</h2>
                <span class="chat-subtitle">Komunikácia s pacientom</span>
              </div>
            </div>

            <div class="messages-wrapper">
              <md-list class="message-list">
                {this.messages.map((msg) => (
                  <div key={msg.id} class={{ 'message-row': true, 'message-row--me': msg.fromMe }}>
                    <div class="message-bubble">
                      <div class="message-text">{msg.text}</div>
                      <span class="message-time">{msg.time}</span>
                    </div>
                  </div>
                ))}
              </md-list>
            </div>

            <div class="chat-footer">
              <input type="text" class="message-input" placeholder="Napíšte správu..." aria-label="Správa" />
              <button type="button" class="send-button" aria-label="Odoslať">
                <md-icon>send</md-icon>
              </button>
            </div>
          </div>
        </slot>
      </Host>
    );
  }
}
