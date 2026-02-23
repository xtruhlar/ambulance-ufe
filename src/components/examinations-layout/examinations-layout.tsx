import { Component, Host, h, State } from '@stencil/core';

/** Simulovaný zoznam klientov (bez DB) – rovnaký ako v medical-records */
const MOCK_CLIENTS = [
  { id: '1', name: 'Ján Novák' },
  { id: '2', name: 'Mária Kováčová' },
  { id: '3', name: 'Peter Horváth' },
];

@Component({
  tag: 'examinations-layout',
  styleUrl: 'examinations-layout.css',
  shadow: true,
})
export class ExaminationsLayout {
  @State() selectedClientId: string = MOCK_CLIENTS[0].id;
  @State() subject = '';
  @State() examinationDate = '';
  @State() notesFromCommunication = '';
  @State() status = '';
  @State() submitFeedback = '';

  private handleClientChange = (e: Event) => {
    const select = e.target as { value?: string };
    if (select?.value) this.selectedClientId = select.value;
  };

  private handleSubmit = (e: Event) => {
    e.preventDefault();
    // Simulácia uloženia – bez databázy zatiaľ len vizuálna akcia
    this.submitFeedback = 'Uložené (demo – bez DB)';
    setTimeout(() => { this.submitFeedback = ''; }, 3000);
  };

  render() {
    return (
      <Host>
        <slot>
          <div class="div-layout">
            <div class="heading-container">
              <div class="head">
                <md-icon>fact_check</md-icon>
                <h2 class="heading">Examinations</h2>
              </div>
            </div>
            <div class="items-wrapper">
              <form class="examination-form" onSubmit={this.handleSubmit}>
                <md-filled-select
                  label="Vyberte klienta"
                  supportingText="Simulované údaje (bez databázy)"
                  class="form-field"
                  value={this.selectedClientId}
                  menuPositioning="fixed"
                  onInput={this.handleClientChange}
                >
                  {MOCK_CLIENTS.map((c) => (
                    <md-select-option value={c.id} selected={this.selectedClientId === c.id}>
                      <div slot="headline">{c.name}</div>
                    </md-select-option>
                  ))}
                </md-filled-select>

                <md-filled-text-field
                  label="Predmet / Dôvod"
                  supportingText="Napr. preventívna prehliadka, kontrola"
                  class="form-field"
                  value={this.subject}
                  onInput={(e) => { this.subject = (e.target as { value?: string })?.value ?? ''; }}
                ></md-filled-text-field>

                <md-filled-text-field
                  label="Dátum vyšetrenia"
                  type="date"
                  class="form-field"
                  value={this.examinationDate}
                  onInput={(e) => { this.examinationDate = (e.target as { value?: string })?.value ?? ''; }}
                ></md-filled-text-field>

                <md-filled-text-field
                  label="Poznámka z komunikácie"
                  supportingText="Zhrnutie z konverzácie s pacientom"
                  class="form-field"
                  value={this.notesFromCommunication}
                  onInput={(e) => { this.notesFromCommunication = (e.target as { value?: string })?.value ?? ''; }}
                ></md-filled-text-field>

                <md-filled-text-field
                  label="Stav"
                  supportingText="Napr. naplánované, dokončené"
                  class="form-field"
                  value={this.status}
                  onInput={(e) => { this.status = (e.target as { value?: string })?.value ?? ''; }}
                ></md-filled-text-field>

                <div class="form-actions">
                  <md-elevated-button type="submit" onClick={this.handleSubmit}>
                    Uložiť vyšetrenie
                  </md-elevated-button>
                  {this.submitFeedback && (
                    <span class="submit-feedback">{this.submitFeedback}</span>
                  )}
                </div>
              </form>
            </div>
          </div>
        </slot>
      </Host>
    );
  }
}
