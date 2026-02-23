import { newSpecPage } from '@stencil/core/testing';
import { ExaminationsLayout } from '../examinations-layout';

describe('examinations-layout', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ExaminationsLayout],
      html: `<examinations-layout></examinations-layout>`,
    });
    expect(page.root).toEqualHtml(`
      <examinations-layout>
        <mock:shadow-root>
          <slot>
            <div class="div-layout">
              <div class="heading-container">
                <div class="head">
                  <md-icon>fact_check</md-icon>
                  <h2 class="heading">Examinations</h2>
                </div>
              </div>
              <div class="items-wrapper">
                <form class="examination-form">
                  <md-filled-select class="form-field" label="Vyberte klienta" menupositioning="fixed" supportingtext="Simulované údaje (bez databázy)" value="1">
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
                  <md-filled-text-field class="form-field" label="Predmet / Dôvod" supportingtext="Napr. preventívna prehliadka, kontrola" value=""></md-filled-text-field>
                  <md-filled-text-field class="form-field" label="Dátum vyšetrenia" type="date" value=""></md-filled-text-field>
                  <md-filled-text-field class="form-field" label="Poznámka z komunikácie" supportingtext="Zhrnutie z konverzácie s pacientom" value=""></md-filled-text-field>
                  <md-filled-text-field class="form-field" label="Stav" supportingtext="Napr. naplánované, dokončené" value=""></md-filled-text-field>
                  <div class="form-actions">
                    <md-elevated-button type="submit">Uložiť vyšetrenie</md-elevated-button>
                  </div>
                </form>
              </div>
            </div>
          </slot>
        </mock:shadow-root>
      </examinations-layout>
    `);
  });
});
