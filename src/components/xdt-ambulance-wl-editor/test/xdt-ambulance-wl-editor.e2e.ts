import { newE2EPage } from '@stencil/core/testing';

describe('xdt-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xdt-ambulance-wl-editor></xdt-ambulance-wl-editor>');

    const element = await page.find('xdt-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
