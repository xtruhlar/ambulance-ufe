import { newE2EPage } from '@stencil/core/testing';

describe('examinations-layout', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<examinations-layout></examinations-layout>');

    const element = await page.find('examinations-layout');
    expect(element).toHaveClass('hydrated');
  });
});
