import { newE2EPage } from '@stencil/core/testing';

describe('trash-layout', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<trash-layout></trash-layout>');

    const element = await page.find('trash-layout');
    expect(element).toHaveClass('hydrated');
  });
});
