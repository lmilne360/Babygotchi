import { browser, by, element } from 'protractor';

export class BabyGotchiPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-babies > h1')).getText();
  }
}
