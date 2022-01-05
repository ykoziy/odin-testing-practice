import calculator from '../code/calculator';

test('two plus one is three', () => {
  expect(calculator.add(2, 1)).toBe(3);
});

test('five minus four is one', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('four divided by two is two', () => {
  expect(calculator.divide(4, 2)).toBe(2);
});

test('25 divided by 0 is NaN', () => {
  expect(calculator.divide(25, 0)).toBe(NaN);
});

test('six times eight is 48', () => {
  expect(calculator.multiply(6, 8)).toBe(48);
});
