import { newE2EPage } from '@stencil/core/testing';

describe('list-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<list-item></list-item>');

    const element = await page.find('list-item');
    expect(element).toHaveClass('hydrated');
  });
});
