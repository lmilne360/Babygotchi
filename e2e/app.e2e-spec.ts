import { BabyGotchiPage } from './app.po';

describe('baby-gotchi App', () => {
  let page: BabyGotchiPage;

  beforeEach(() => {
    page = new BabyGotchiPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
