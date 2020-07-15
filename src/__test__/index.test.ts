import { odd, even } from '../index';
test('odd even', () => {
  expect(odd(12)).toBeFalsy();
  expect(even(13)).toBeFalsy();
});
