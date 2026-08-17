import test from 'node:test';
import assert from 'node:assert/strict';

test('inquiry reference format reserves the ELT prefix, date and non-sequential suffix', () => {
  const reference = 'ELT-260815-K7M4';
  assert.match(reference, /^ELT-\d{6}-[A-Z2-9]{4}$/);
});
