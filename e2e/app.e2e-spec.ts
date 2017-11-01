import { FbNgrxTodolistPage } from './app.po';

describe('fb-ngrx-todolist App', () => {
  let page: FbNgrxTodolistPage;

  beforeEach(() => {
    page = new FbNgrxTodolistPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
