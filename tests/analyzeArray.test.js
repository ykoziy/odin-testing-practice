import analyzeArray from '../code/analyzeArray';

test('lalaal', () => {
  const result = { average: 4, min: 1, max: 8, length: 6 };

  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual(result);
});
