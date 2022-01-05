import { capitalize } from '../code/capitalize';

test("'' return ''", () => {
  expect(capitalize('')).toBe('');
});

test("'robert' returns 'Robert'", () => {
  expect(capitalize('robert')).toBe('Robert');
});

test("'RoBeRt' returns 'RoBeRt'", () => {
  expect(capitalize('RoBeRt')).toBe('RoBeRt');
});

test("'roBeRt' returns 'RoBeRt'", () => {
  expect(capitalize('roBeRt')).toBe('RoBeRt');
});

test("'water under the bridge' returns 'Water under the bridge'", () => {
  expect(capitalize('water under the bridge')).toBe('Water under the bridge');
});
