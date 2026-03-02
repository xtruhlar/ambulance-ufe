import { newE2EPage } from '@stencil/core/testing';

describe('xdt-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xdt-ambulance-wl-app></xdt-ambulance-wl-app>');

    const element = await page.find('xdt-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
