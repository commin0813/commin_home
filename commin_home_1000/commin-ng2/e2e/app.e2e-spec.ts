import { ComminNg2Page } from './app.po';

describe('commin-ng2 App', () => {
  let page: ComminNg2Page;

  beforeEach(() => {
    page = new ComminNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
