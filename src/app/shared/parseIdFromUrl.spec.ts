import { parseFromUrl } from './parseIdFromUrl';

describe('parse id from url', () => {
  it('return an integer from the url representing an id', () => {
    const url = 'http://localhost:3000/todolists/5';
    const expected = parseFromUrl(url);

    expect(expected).toBe(5);
  });
});
