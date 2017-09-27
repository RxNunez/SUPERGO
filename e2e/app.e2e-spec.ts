import { FundeePage } from './app.po';

describe('fundee App', () => {
  let page: FundeePage;

  beforeEach(() => {
    page = new FundeePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
