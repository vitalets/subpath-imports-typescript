import { expect, test } from 'vitest'
import { foo } from '#utils.js';

test('foo is 42', () => {
  expect(foo).toBe(42);
});
