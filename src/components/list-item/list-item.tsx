import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'list-item',
  styleUrl: 'list-item.css',
  shadow: false,
})
export class ListItem {
  @Prop() chipLabel = 'Active';
  @Prop() status: 'NEW' | 'READ' | 'ARCHIVED' | 'REVOKED' = 'NEW';
  @Prop() name = 'John Doe';
  @Prop() text = 'Nová správa od kontaktu ... ';
  private getStatusColors() {
    const colors: { [key: string]: { bg: string; text: string } } = {
      'NEW': { bg: '#e6f7ed', text: '#1dc251' },
      'READ': { bg: '#d5e4f7', text: '#2d82dc' },
      'ARCHIVED': { bg: '#f1f3f4', text: '#80868b' },
      'REVOKED': { bg: '#ffebee', text: '#d32f2f' },
    };
    return colors[this.status] || colors['NEW'];
  }

  render() {
    const colors = this.getStatusColors();
    return (
      <md-list-item>
        <md-icon slot="start" class="user-icon">person</md-icon>
        <div slot="headline">{this.name}</div>
        <div slot="supporting-text">{this.text}</div>
        <div slot="end" class="chip-wrapper" style={{ backgroundColor: colors.bg, color: colors.text }}>
          <md-assist-chip label={this.chipLabel}></md-assist-chip>
        </div>
        {this.status !== 'ARCHIVED' && <md-icon slot="end" title="Archivovať">archive</md-icon>}
        <md-icon slot="end" title="Vymazať">delete</md-icon>
        <md-icon slot="end">arrow_forward</md-icon>
      </md-list-item>
    );
  }
}
