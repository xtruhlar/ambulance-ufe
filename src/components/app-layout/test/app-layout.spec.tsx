import { newSpecPage } from '@stencil/core/testing';
import { AppLayout } from '../app-layout';

describe('app-layout', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppLayout],
      html: `<app-layout></app-layout>`,
    });
    expect(page.root).toEqualHtml(`
      <app-layout>
        <mock:shadow-root>
          <div class="layout">
            <app-header></app-header>
            <div class="body">
              <app-sidebar activelayout="messages"></app-sidebar>
              <main class="box-container">
                <slot>
                  <messages-layout></messages-layout>
                </slot>
              </main>
            </div>
          </div>
        </mock:shadow-root>
      </app-layout>
    `);
  });
});
