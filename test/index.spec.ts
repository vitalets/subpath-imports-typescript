import { foo } from '#utils.js';

if (foo !== 42) {
  throw new Error('foo is not 42');
}
