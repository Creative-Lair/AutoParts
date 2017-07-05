import { AutopartPage } from './app.po';

describe('autopart App', () => {
  let page: AutopartPage;

  beforeEach(() => {
    page = new AutopartPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
