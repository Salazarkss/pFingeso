import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
<<<<<<< HEAD
    expect(page.getParagraphText()).toEqual('Welcome to proyectoFingeso!');
=======
    expect(page.getParagraphText()).toEqual('Welcome to pfing!');
>>>>>>> 290d0be7fa8116645de8b415e905d2e528cc9cd6
  });
});
