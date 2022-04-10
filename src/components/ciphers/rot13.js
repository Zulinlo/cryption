const a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM";

export const rot13Encryption= message => {
  return message.replace(/[a-z]/gi, c => b[a.indexOf(c)]);
}

export const rot13Decryption = message => {
  return message.replace(/[a-z]/gi, c => a[b.indexOf(c)]);
}
