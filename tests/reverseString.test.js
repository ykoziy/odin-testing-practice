import { reverse } from '../code/reverseString';

test("'' return ''", () => {
  expect(reverse('')).toBe('');
});

test("'robert' returns 'trebor'", () => {
  expect(reverse('robert')).toBe('trebor');
});

test("'.nworc eht sraew taht daeh eht seil ysaenU' returns 'Uneasy lies the head that wears the crown.'", () => {
  expect(reverse('.nworc eht sraew taht daeh eht seil ysaenU')).toBe(
    'Uneasy lies the head that wears the crown.',
  );
});
