import { Component, Event, EventEmitter, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'app-sidebar',
  styleUrl: 'app-sidebar.css',
  shadow: true,
})
export class AppSidebar {
  @Event({ bubbles: true, composed: true })
  layoutSelect: EventEmitter<'messages' | 'archive' | 'medical-records' | 'examinations' | 'trash'>;

  @Prop({ mutable: true, reflect: true })
  activeLayout: 'messages' | 'archive' | 'medical-records' | 'examinations' | 'trash' = 'messages';

  private handleSelect = (layout: 'messages' | 'archive' | 'medical-records' | 'examinations' | 'trash') => {
    this.activeLayout = layout;
    this.layoutSelect.emit(layout);
  };

  render() {
    return (
      <Host>
        <div class="sidebar-container">
          <md-list>
            <md-list-item onClick={() => this.handleSelect('messages')} class={{ 'active': this.activeLayout === 'messages' }}>
              <md-icon slot="start">message</md-icon>
              Messages
            </md-list-item>
            <md-divider></md-divider>
            <md-list-item onClick={() => this.handleSelect('medical-records')} class={{ 'active': this.activeLayout === 'medical-records' }}>
              <md-icon slot="start">assignment</md-icon>
              Medical Records
            </md-list-item>
            <md-divider></md-divider>
            <md-list-item onClick={() => this.handleSelect('examinations')} class={{ 'active': this.activeLayout === 'examinations' }}>
              <md-icon slot="start">fact_check</md-icon>
              Examinations
            </md-list-item>
            <md-divider></md-divider>
            <md-list-item onClick={() => this.handleSelect('archive')} class={{ 'active': this.activeLayout === 'archive' }}>
              <md-icon slot="start">archive</md-icon>
              Archive
            </md-list-item>
          </md-list>
        </div>
        <div class="sidebar-container" style={{ 'margin-top': '100%' }}>
          <md-list>
            <md-list-item onClick={() => this.handleSelect('trash')} class={{ 'active': this.activeLayout === 'trash' }}>
              <md-icon slot="start">delete</md-icon>
              Trash
            </md-list-item>
          </md-list>
        </div>
      </Host>
    );
  }
}
