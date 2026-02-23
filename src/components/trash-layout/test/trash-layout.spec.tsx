import { newSpecPage } from '@stencil/core/testing';
import { TrashLayout } from '../trash-layout';

describe('trash-layout', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TrashLayout],
      html: `<trash-layout></trash-layout>`,
    });
    expect(page.root).toEqualHtml(`
      <trash-layout>
        <mock:shadow-root>
          <slot>
            <div class="div-layout">
              <div class="heading-container">
                <div class="head">
                  <md-icon>delete</md-icon>
                  <h2 class="heading">Kôš</h2>
                </div>
              </div>
              <div class="items-wrapper">
                <md-list>
                  <list-item chiplabel="V KOŠI" name="Anna Krajčírová" status="REVOKED" text="Starý záznam – vymazaná komunikácia ..."></list-item>
                </md-list>
              </div>
            </div>
          </slot>
        </mock:shadow-root>
      </trash-layout>
    `);
  });
});
