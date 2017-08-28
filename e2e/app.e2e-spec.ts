import { EiblWebsitePage } from './app.po';

describe('eibl-website App', () => {
  let page: EiblWebsitePage;

  beforeEach(() => {
    page = new EiblWebsitePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
