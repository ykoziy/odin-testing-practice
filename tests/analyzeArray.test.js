import analyzeArray from '../code/analyzeArray';

test('analyzeArray returns the correct object for the array [1, 8, 3, 4, 2, 6]', () => {
  const result = { average: 4, min: 1, max: 8, length: 6 };

  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual(result);
});

test('analyzeArray returns the correct object for the array []', () => {
  expect(analyzeArray([])).toEqual({});
});
