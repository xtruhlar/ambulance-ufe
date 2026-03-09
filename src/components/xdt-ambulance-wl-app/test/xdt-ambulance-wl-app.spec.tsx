import { newSpecPage } from '@stencil/core/testing';
import { XdtAmbulanceWlApp } from '../xdt-ambulance-wl-app';

describe('xdt-ambulance-wl-app', () => {

  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [XdtAmbulanceWlApp],
      html: `<xdt-ambulance-wl-app base-path="/"></xdt-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual ("xdt-ambulance-wl-editor");

  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [XdtAmbulanceWlApp],
      html: `<xdt-ambulance-wl-app base-path="/ambulance-wl/"></xdt-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual("xdt-ambulance-wl-list");
  });
});