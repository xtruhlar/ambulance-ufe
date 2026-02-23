import { newE2EPage } from '@stencil/core/testing';

describe('sidebar-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sidebar-item></sidebar-item>');

    const element = await page.find('sidebar-item');
    expect(element).toHaveClass('hydrated');
  });
});
