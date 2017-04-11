import { UniversalPage } from './app.po';

describe('universal App', () => {
  let page: UniversalPage;

  beforeEach(() => {
    page = new UniversalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
