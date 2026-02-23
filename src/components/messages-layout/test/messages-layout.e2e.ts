import { newE2EPage } from '@stencil/core/testing';

describe('messages-layout', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<messages-layout></messages-layout>');

    const element = await page.find('messages-layout');
    expect(element).toHaveClass('hydrated');
  });
});
