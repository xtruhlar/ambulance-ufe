import { newE2EPage } from '@stencil/core/testing';

describe('medical-records-layout', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<medical-records-layout></medical-records-layout>');

    const element = await page.find('medical-records-layout');
    expect(element).toHaveClass('hydrated');
  });
});
