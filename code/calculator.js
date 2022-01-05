const calculator = {
  add: function add(a, b) {
    return a + b;
  },
  subtract: function subtract(a, b) {
    return a - b;
  },
  divide: function divide(a, b) {
    if (b === 0) {
      return NaN;
    }
    return a / b;
  },
  multiply: function multiply(a, b) {
    return a * b;
  },
};

export default calculator;
