import { VntPlayPage } from './app.po';

describe('vnt-play App', function() {
  let page: VntPlayPage;

  beforeEach(() => {
    page = new VntPlayPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
