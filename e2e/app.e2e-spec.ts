import { NotjohnPage } from './app.po';

describe('notjohn App', () => {
  let page: NotjohnPage;

  beforeEach(() => {
    page = new NotjohnPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
