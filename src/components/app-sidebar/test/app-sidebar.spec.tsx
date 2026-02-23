import { newSpecPage } from '@stencil/core/testing';
import { AppSidebar } from '../app-sidebar';

describe('app-sidebar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppSidebar],
      html: `<app-sidebar></app-sidebar>`,
    });
    expect(page.root).toEqualHtml(`
      <app-sidebar active-layout="messages">
        <mock:shadow-root>
          <div class="sidebar-container">
            <md-list>
              <md-list-item class="active">
                <md-icon slot="start">message</md-icon>
                Messages
              </md-list-item>
              <md-divider></md-divider>
              <md-list-item>
                <md-icon slot="start">assignment</md-icon>
                Medical Records
              </md-list-item>
              <md-divider></md-divider>
              <md-list-item>
                <md-icon slot="start">fact_check</md-icon>
                Examinations
              </md-list-item>
              <md-divider></md-divider>
              <md-list-item>
                <md-icon slot="start">archive</md-icon>
                Archive
              </md-list-item>
            </md-list>
          </div>
          <div class="sidebar-container" style="margin-top: 100%;">
            <md-list>
              <md-list-item>
                <md-icon slot="start">delete</md-icon>
                Trash
              </md-list-item>
            </md-list>
          </div>
        </mock:shadow-root>
      </app-sidebar>
    `);
  });
});
