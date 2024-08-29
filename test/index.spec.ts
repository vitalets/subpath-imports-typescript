import { expect, test } from 'vitest'
import { foo } from '../src/utils';

test('foo is 42', () => {
  expect(foo).toBe(42);
});
