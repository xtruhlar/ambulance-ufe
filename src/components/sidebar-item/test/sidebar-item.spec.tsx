import { newSpecPage } from '@stencil/core/testing';
import { SidebarItem } from '../sidebar-item';

describe('sidebar-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SidebarItem],
      html: `<sidebar-item label="Inbox" icon="message"></sidebar-item>`,
    });
    expect(page.root).toEqualHtml(`
      <sidebar-item label="Inbox" icon="message">
        <mock:shadow-root>
          <slot>
            <div class="sidebar-item-container">
              <md-icon class="item-icon">message</md-icon>
              <span class="item-text">Inbox</span>
            </div>
          </slot>
        </mock:shadow-root>
      </sidebar-item>
    `);
  });
});
