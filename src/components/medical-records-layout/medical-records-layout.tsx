import { Component, Host, h, State } from '@stencil/core';

interface PatientInfo {
  id: string;
  firstName: string;
  lastName: string;
  shortHistory: string;
}

/** Simulovaný zoznam klientov (bez DB) */
const MOCK_PATIENTS: PatientInfo[] = [
  {
    id: '1',
    firstName: 'Ján',
    lastName: 'Novák',
    shortHistory: 'Pacient s anamnézou hypertenzie od r. 2020, pravidelné kontroly. Bez alergií. Posledná návšteva 15.02.2025.',
  },
  {
    id: '2',
    firstName: 'Mária',
    lastName: 'Kováčová',
    shortHistory: 'Kontrola po úraze kolena, rehabilitácia v priebehu. Žiadne alergie. Návšteva 18.02.2025.',
  },
  {
    id: '3',
    firstName: 'Peter',
    lastName: 'Horváth',
    shortHistory: 'Preventívna prehliadka, diabetes 2. typu od r. 2019. Pravidelné odbery. Návšteva 20.02.2025.',
  },
];

@Component({
  tag: 'medical-records-layout',
  styleUrl: 'medical-records-layout.css',
  shadow: true,
})
export class MedicalRecordsLayout {
  /** Vybratý pacient (Retrieve) */
  @State() selectedPatientId: string = MOCK_PATIENTS[0].id;

  private get patient(): PatientInfo {
    return MOCK_PATIENTS.find((p) => p.id === this.selectedPatientId) ?? MOCK_PATIENTS[0];
  }

  private handlePatientChange = (e: Event) => {
    const select = e.target as { value?: string };
    if (select?.value) {
      this.selectedPatientId = select.value;
    }
  };

  render() {
    return (
      <Host>
        <slot>
          <div class="div-layout">
            <div class="heading-container">
              <div class="head">
                <md-icon>assignment</md-icon>
                <h2 class="heading">Medical Records</h2>
              </div>
            </div>
            <div class="items-wrapper">
              <div class="patient-section">
                <md-filled-select
                  label="Vyberte pacienta"
                  supportingText="Simulované údaje (bez databázy)"
                  class="patient-select"
                  value={this.selectedPatientId}
                  menuPositioning="fixed"
                  onInput={this.handlePatientChange}
                >
                  <md-select-option value="1" selected={this.selectedPatientId === '1'}>
                    <div slot="headline">Ján Novák</div>
                  </md-select-option>
                  <md-select-option value="2" selected={this.selectedPatientId === '2'}>
                    <div slot="headline">Mária Kováčová</div>
                  </md-select-option>
                  <md-select-option value="3" selected={this.selectedPatientId === '3'}>
                    <div slot="headline">Peter Horváth</div>
                  </md-select-option>
                </md-filled-select>
                <h3 class="section-title">Informácie o pacientovi</h3>
                <md-list class="patient-list">
                  <md-list-item class="patient-item">
                    <md-icon slot="start">person</md-icon>
                    <div slot="headline">Meno</div>
                    <div slot="supporting-text">{this.patient.firstName}</div>
                  </md-list-item>
                  <md-divider></md-divider>
                  <md-list-item class="patient-item">
                    <md-icon slot="start">person</md-icon>
                    <div slot="headline">Priezvisko</div>
                    <div slot="supporting-text">{this.patient.lastName}</div>
                  </md-list-item>
                  <md-divider></md-divider>
                  <md-list-item class="patient-item patient-item-history">
                    <md-icon slot="start">history_edu</md-icon>
                    <div slot="headline">Krátka história</div>
                    <div slot="supporting-text">{this.patient.shortHistory}</div>
                  </md-list-item>
                </md-list>
              </div>
            </div>
          </div>
        </slot>
      </Host>
    );
  }
}
