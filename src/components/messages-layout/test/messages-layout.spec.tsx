import { newSpecPage } from '@stencil/core/testing';
import { MessagesLayout } from '../messages-layout';

describe('messages-layout', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MessagesLayout],
      html: `<messages-layout></messages-layout>`,
    });
    expect(page.root).toEqualHtml(`
      <messages-layout>
        <mock:shadow-root>
          <slot>
            <div class="div-layout">
              <div class="heading-container">
                <div class="head">
                  <md-icon>message</md-icon>
                  <h2 class="heading">Messages</h2>
                </div>
                <div class="actions">
                  <md-elevated-button>+ New message</md-elevated-button>
                </div>
              </div>
              <div class="items-wrapper">
                <md-list>
                  <div>
                    <div class="conversation-row" role="button" tabindex="0">
                      <list-item chiplabel="NEW" name="Jano" status="NEW" text="Nová správa od kontaktu ..."></list-item>
                    </div>
                    <md-divider></md-divider>
                  </div>
                  <div>
                    <div class="conversation-row" role="button" tabindex="0">
                      <list-item chiplabel="REVOKED" name="Peter" status="REVOKED" text="Nová správa od kontaktu ..."></list-item>
                    </div>
                    <md-divider></md-divider>
                  </div>
                  <div>
                    <div class="conversation-row" role="button" tabindex="0">
                      <list-item chiplabel="READ" name="Martin" status="READ" text="Nová správa od kontaktu ..."></list-item>
                    </div>
                  </div>
                </md-list>
              </div>
            </div>
          </slot>
        </mock:shadow-root>
      </messages-layout>
    `);
  });
});
