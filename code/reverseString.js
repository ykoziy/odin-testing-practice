function reverse(srcString) {
  if (srcString.length == 0) {
    return '';
  }
  const chars = srcString.split('');
  let result = '';
  for (let i = chars.length - 1; i >= 0; i--) {
    result += chars[i];
  }
  return result;
}

export { reverse };
