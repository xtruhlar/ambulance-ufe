import { newSpecPage } from '@stencil/core/testing';
import { TruhlarAmbulanceWeList } from '../truhlar-ambulance-we-list';

describe('truhlar-ambulance-we-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TruhlarAmbulanceWeList],
      html: `<truhlar-ambulance-we-list></truhlar-ambulance-we-list>`,
    });
    expect(page.root).toEqualHtml(`
      <truhlar-ambulance-we-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </truhlar-ambulance-we-list>
    `);
  });
});
