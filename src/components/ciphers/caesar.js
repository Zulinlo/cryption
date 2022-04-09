const shift = (n = 0, alphabet) => {
  let newAlphabet = "";
  for (let i = 0; i < alphabet.length; i++) {
    let offset = (i + n) % alphabet.length;
    newAlphabet += alphabet[offset];
  }
  return newAlphabet;
}

export const caesarEncryption = (message, n) => {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let newAlphabet = shift(n, alphabet);

  let res = "";
  message = message.toLowerCase();

  for (let i = 0; i < message.length; i++) {
    let index = alphabet.indexOf(message[i]);
    res += newAlphabet[index];
  }

  return res;
}

export const caesarDecryption = (message, n) => {
  let res = "";
  message = message.toLowerCase();
  for (let i = 0; i < message.length; i++){
    let index = newalpha.indexOf(message[i]);
    res += alphabet[index];
  }
  return result;
}
