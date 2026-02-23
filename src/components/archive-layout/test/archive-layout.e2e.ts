import { newE2EPage } from '@stencil/core/testing';

describe('archive-layout', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<archive-layout></archive-layout>');

    const element = await page.find('archive-layout');
    expect(element).toHaveClass('hydrated');
  });
});
