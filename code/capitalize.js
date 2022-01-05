function capitalize(srcString) {
  if (srcString.length == 0) {
    return '';
  }
  const firstLetter = srcString.slice(0, 1);
  return firstLetter.toUpperCase() + srcString.slice(1);
}

export { capitalize };
