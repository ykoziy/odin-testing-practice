function encrypt(code, key) {
  let shiftedCode = (code + key) % 26;
  return String.fromCharCode(shiftedCode + 97);
}

function isUpperCase(char) {
  return char === char.toUpperCase();
}

function caesarCipher(srcString, shiftKey) {
  let chars = srcString.toLowerCase().split('');
  let result = '';
  for (let i = 0; i < chars.length; i++) {
    if (chars[i].match(/[a-z]/g)) {
      let code = chars[i].charCodeAt(0) - 97;
      let newChar = encrypt(code, shiftKey);
      if (isUpperCase(srcString[i])) {
        result += newChar.toUpperCase();
      } else {
        result += newChar;
      }
    } else {
      result += chars[i];
    }
  }
  return result;
}

export default caesarCipher;
