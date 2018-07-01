import { EverprosperPage } from './app.po';

describe('everprosper App', () => {
  let page: EverprosperPage;

  beforeEach(() => {
    page = new EverprosperPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
