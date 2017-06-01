import { OSchoolPage } from './app.po';

describe('o-school App', () => {
  let page: OSchoolPage;

  beforeEach(() => {
    page = new OSchoolPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
