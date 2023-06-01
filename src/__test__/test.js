import ErrorRepository from '../error.js';

test('test regular error', () => {
  const repo = new ErrorRepository();
  const res = repo.translate(235);
  expect(res).toBe('Difficult error');
});

test('test unknown error', () => {
  const repo = new ErrorRepository();
  const res = repo.translate(127);
  expect(res).toBe('Unknown error');
});
