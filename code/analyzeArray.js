function analyzeArray(srcArray) {
  const result = {};
  if (srcArray.length == 0) {
    return result;
  }
  result.length = srcArray.length;
  result.max = Math.max(...srcArray);
  result.min = Math.min(...srcArray);
  result.average =
    srcArray.reduce((sum, num) => {
      return sum + num;
    }) / srcArray.length;
  return result;
}

export default analyzeArray;
