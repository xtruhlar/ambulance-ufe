import { newE2EPage } from '@stencil/core/testing';

describe('truhlar-ambulance-we-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<truhlar-ambulance-we-list></truhlar-ambulance-we-list>');

    const element = await page.find('truhlar-ambulance-we-list');
    expect(element).toHaveClass('hydrated');
  });
});
