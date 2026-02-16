import { newSpecPage } from '@stencil/core/testing';
import { TruhlarAmbulanceWeList } from '../truhlar-ambulance-we-list';

describe('truhlar-ambulance-we-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TruhlarAmbulanceWeList],
      html: `<truhlar-ambulance-we-list></truhlar-ambulance-we-list>`,
    });
      const wlList = page.rootInstance as TruhlarAmbulanceWeList;
      const expectedPatients = wlList?.waitingPatients?.length

      const items = page.root.shadowRoot.querySelectorAll("md-list-item");
      expect(items.length).toEqual(expectedPatients);
  });
});
