const lookup = {'A':'aaaaa', 'B':'aaaab', 'C':'aaaba', 'D':'aaabb', 'E':'aabaa',
        'F':'aabab', 'G':'aabba', 'H':'aabbb', 'I':'abaaa', 'J':'abaab',
        'K':'ababa', 'L':'ababb', 'M':'abbaa', 'N':'abbab', 'O':'abbba',
        'P':'abbbb', 'Q':'baaaa', 'R':'baaab', 'S':'baaba', 'T':'baabb',
        'U':'babaa', 'V':'babab', 'W':'babba', 'X':'babbb', 'Y':'bbaaa', 'Z':'bbaab'};

const decodeLookup = {'aaaaa':'A', 'aaaab':'B', 'aaaba':'C', 'aaabb':'D', 'aabaa':'E',
        'aabab':'F', 'aabba':'G', 'aabbb':'H', 'abaaa':'I', 'abaab':'J',
        'ababa':'K', 'ababb':'L', 'abbaa':'M', 'abbab':'N', 'abbba':'O',
        'abbbb':'P', 'baaaa':'Q', 'baaab':'R', 'baaba':'S', 'baabb':'T',
        'babaa':'U', 'babab':'V', 'babba':'W', 'babbb':'X', 'bbaaa':'Y', 'bbaab':'Z'};

export const baconianEncryption = (message) => {
  let res = "";
  for (let char of message) {
    if (char !== "") {
      res += lookup[char] + " ";
    } else {
      res += ' ';
    }
  }
  return res;
}

export const baconianDecryption = (message) => {
  let res = "";
  let i = 0;

  while (true) {
    if (i < message.length - 4) {
      let subStr = message.slice(i, i + 5);

      if (subStr[0] !== " ") {
        res += decodeLookup[subStr];
        i += 5;
      } else {
        res += " ";
        i++;
      }
    } else {
      break;
    }
  }

  return res;
}
