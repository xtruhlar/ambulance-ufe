import { newSpecPage } from '@stencil/core/testing';
import { ListItem } from '../list-item';

describe('list-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ListItem],
      html: `<list-item></list-item>`,
    });
    expect(page.root).toEqualHtml(`
      <list-item>
        <md-list-item>
          <md-icon class="user-icon" slot="start">person</md-icon>
          <div slot="headline">John Doe</div>
          <div slot="supporting-text">Nová správa od kontaktu ...</div>
          <div class="chip-wrapper" slot="end" style="background-color: #e6f7ed; color: #1dc251;">
            <md-assist-chip label="Active"></md-assist-chip>
          </div>
          <md-icon slot="end" title="Archivovať">archive</md-icon>
          <md-icon slot="end" title="Vymazať">delete</md-icon>
          <md-icon slot="end">arrow_forward</md-icon>
        </md-list-item>
      </list-item>
    `);
  });
});
