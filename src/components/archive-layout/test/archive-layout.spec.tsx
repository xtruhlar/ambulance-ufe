import { newSpecPage } from '@stencil/core/testing';
import { ArchiveLayout } from '../archive-layout';

describe('archive-layout', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ArchiveLayout],
      html: `<archive-layout></archive-layout>`,
    });
    expect(page.root).toEqualHtml(`
      <archive-layout>
        <mock:shadow-root>
          <slot>
            <div class="div-layout">
              <div class="heading-container">
                <div class="head">
                  <md-icon>archive</md-icon>
                  <h2 class="heading">Archive</h2>
                </div>
              </div>
              <div class="items-wrapper">
                <md-list>
                  <div>
                    <list-item chiplabel="ARCHIVED" name="Miro" status="ARCHIVED" text="Nová správa od kontaktu ..."></list-item>
                    <md-divider></md-divider>
                  </div>
                  <div>
                    <list-item chiplabel="ARCHIVED" name="Lukas" status="ARCHIVED" text="Nová správa od kontaktu ..."></list-item>
                  </div>
                </md-list>
              </div>
            </div>
          </slot>
        </mock:shadow-root>
      </archive-layout>
    `);
  });
});
