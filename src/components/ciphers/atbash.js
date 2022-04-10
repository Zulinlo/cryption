const encodeChar = char => {
  if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122)
    return String.fromCharCode(-char.charCodeAt(0) + 219);
  else if (/\d/.test(char)) 
    return char;
  return '';
}

export const atbashEncryption = message => {
  message = message.replace(/[\s,]/g, '').toLowerCase().split('');
  let arr = message.map(char => encodeChar(char));
  let code = '';
  let compt = 0;

  arr.forEach(char => {
    code += char;
    ++compt;
    if (compt === 5) {
      code += ' ';
      compt = 0;
    }
  })
  return code.trim();
};

export const atbashDecryption = message => {
  message = message.replace(/\s/, '');
  let code = '';
  for (let i=0; i < message.length; i++) {
    code += encodeChar(message[i]);
  }
  return code;
};
