import { ExamportalPage } from './app.po';

describe('examportal App', () => {
  let page: ExamportalPage;

  beforeEach(() => {
    page = new ExamportalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
