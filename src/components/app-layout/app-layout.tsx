import { Component, Host, h, State } from '@stencil/core';
import type { ChatContact } from '../chat-layout/chat-layout';

@Component({
  tag: 'app-layout',
  styleUrl: 'app-layout.css',
  shadow: true,
})
export class AppLayout {
  @State() activeLayout: 'messages' | 'archive' | 'medical-records' | 'examinations' | 'trash' = 'messages';
  /** Vybratý kontakt pre chat (detail komunikácie z messages) */
  @State() selectedContact: ChatContact | null = null;

  private handleLayoutSelect = (event: CustomEvent<'messages' | 'archive' | 'medical-records' | 'examinations' | 'trash'>) => {
    this.activeLayout = event.detail;
    if (event.detail !== 'messages') {
      this.selectedContact = null;
    }
  };

  private handleContactSelect = (event: CustomEvent<ChatContact>) => {
    this.selectedContact = event.detail;
  };

  private handleChatBack = () => {
    this.selectedContact = null;
  };

  private renderActiveLayout() {
    if (this.activeLayout === 'messages') {
      if (this.selectedContact) {
        return (
          <chat-layout
            contact={this.selectedContact}
            onBack={this.handleChatBack}
          ></chat-layout>
        );
      }
      return (
        <messages-layout
          onContactSelect={this.handleContactSelect}
        ></messages-layout>
      );
    }
    switch (this.activeLayout) {
      case 'archive':
        return <archive-layout></archive-layout>;
      case 'medical-records':
        return <medical-records-layout></medical-records-layout>;
      case 'examinations':
        return <examinations-layout></examinations-layout>;
      case 'trash':
        return <trash-layout></trash-layout>;
      default:
        return <messages-layout onContactSelect={this.handleContactSelect}></messages-layout>;
    }
  }

  render() {
    return (
      <Host>
        <div class="layout">
          <app-header></app-header>

          <div class="body">
            <app-sidebar
              activeLayout={this.activeLayout}
              onLayoutSelect={this.handleLayoutSelect}
            ></app-sidebar>

            <main class="box-container">
              <slot>
                {this.renderActiveLayout()}
              </slot>
            </main>
          </div>
        </div>        
      </Host>
    );
  }
}
