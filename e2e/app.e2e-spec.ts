import { Angular2RoutesAuthPage } from './app.po';

describe('angular2-routes-auth App', () => {
  let page: Angular2RoutesAuthPage;

  beforeEach(() => {
    page = new Angular2RoutesAuthPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
