const isUpperCase = letter => {
    let l = letter.charCodeAt();
    return l > 64 && l < 91;
}

const isLowerCase = letter => {
    let l = letter.charCodeAt();
    return l > 96 && l < 123;
}

const mod = (n, m) => ((n % m ) + m) % m;

export const vigenereEncryption = (message, key) => {
    let res = "";
    let j = 0;
    for (let i = 0; i < message.length; i++) {
        let currentLetter = message[i];
        const A = 65;
        const a = 97;

        if (isUpperCase(currentLetter)) {
            let Pi = (currentLetter.charCodeAt(0) - A);
            let Ki = (key[j % key.length].toUpperCase().charCodeAt() - A);
            let upperLetter = mod(Pi + Ki, 26);

            res += String.fromCharCode(upperLetter + A);
            j++;
        } else if (isLowerCase(currentLetter)) {
            let Pi = (currentLetter.charCodeAt() - a);
            let Ki = (key[j % key.length].toLowerCase().charCodeAt() - a);
            let lowerLetter = mod(Pi + Ki, 26);

            res += String.fromCharCode(lowerLetter + a);
            j++;
        } else  {
            res += currentLetter;
        }
    }
    return res;
}

export const vigenereDecryption = (message, key) => {
    let res = "";
    let j = 0;
    for (let i = 0; i < message.length; i++) {
        let currentLetter = message[i];
        const A = 65;
        const a = 97;

        if (isUpperCase(currentLetter)) {
            let Ci = (currentLetter.charCodeAt(0) - A);
            let Ki = (key[j % key.length].toUpperCase()).charCodeAt() - A;
            let upperLetter = mod(Ci - Ki, 26);

            res += String.fromCharCode(upperLetter + A);
            j++;
        } else if (isLowerCase(currentLetter)) {
            let Ci = (currentLetter.charCodeAt(0) - a);
            let Ki = (key[j % key.length].toLowerCase()).charCodeAt() - a;
            let lowerLetter = mod(Ci - Ki, 26);

            res += String.fromCharCode(lowerLetter + a);
            j++;
        } else {
            res += currentLetter;
        }
    }
    return res;
}
