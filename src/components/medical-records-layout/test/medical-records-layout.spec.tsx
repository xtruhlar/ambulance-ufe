import { newSpecPage } from '@stencil/core/testing';
import { MedicalRecordsLayout } from '../medical-records-layout';

describe('medical-records-layout', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MedicalRecordsLayout],
      html: `<medical-records-layout></medical-records-layout>`,
    });
    expect(page.root).toEqualHtml(`
      <medical-records-layout>
        <mock:shadow-root>
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
                  <md-filled-select class="patient-select" label="Vyberte pacienta" menupositioning="fixed" supportingtext="Simulované údaje (bez databázy)" value="1">
                    <md-select-option selected="" value="1">
                      <div slot="headline">Ján Novák</div>
                    </md-select-option>
                    <md-select-option value="2">
                      <div slot="headline">Mária Kováčová</div>
                    </md-select-option>
                    <md-select-option value="3">
                      <div slot="headline">Peter Horváth</div>
                    </md-select-option>
                  </md-filled-select>
                  <h3 class="section-title">Informácie o pacientovi</h3>
                  <md-list class="patient-list">
                    <md-list-item class="patient-item">
                      <md-icon slot="start">person</md-icon>
                      <div slot="headline">Meno</div>
                      <div slot="supporting-text">Ján</div>
                    </md-list-item>
                    <md-divider></md-divider>
                    <md-list-item class="patient-item">
                      <md-icon slot="start">person</md-icon>
                      <div slot="headline">Priezvisko</div>
                      <div slot="supporting-text">Novák</div>
                    </md-list-item>
                    <md-divider></md-divider>
                    <md-list-item class="patient-item patient-item-history">
                      <md-icon slot="start">history_edu</md-icon>
                      <div slot="headline">Krátka história</div>
                      <div slot="supporting-text">Pacient s anamnézou hypertenzie od r. 2020, pravidelné kontroly. Bez alergií. Posledná návšteva 15.02.2025.</div>
                    </md-list-item>
                  </md-list>
                </div>
              </div>
            </div>
          </slot>
        </mock:shadow-root>
      </medical-records-layout>
    `);
  });
});
