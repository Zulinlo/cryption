const getKeyMatrix = (key, keyMatrix) => {
    let  k = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            keyMatrix[i][j] = (key[k]).charCodeAt(0) % 65;
            k++;
        }
    }
}
 
const encrypt = (cipherMatrix, keyMatrix, messageVector) => {
    let x, i, j;
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 1; j++) {
            cipherMatrix[i][j] = 0;
           
            for (x = 0; x < 3; x++) {
                cipherMatrix[i][j] +=
                    keyMatrix[i][x] * messageVector[x][j];
            }
            cipherMatrix[i][j] = cipherMatrix[i][j] % 26;
        }
    }
}
 
export const hillEncryption = (message, key) => {
    let keyMatrix = new Array(3);
    for (let i = 0; i < 3; i++) {
        keyMatrix[i] = new Array(3);
        for (let j = 0; j < 3; j++)
            keyMatrix[i][j] = 0;
    }
    getKeyMatrix(key, keyMatrix);
   
    let messageVector = new Array(3);
    for (let i = 0; i < 3; i++) {
        messageVector[i] = new Array(1);
        messageVector[i][0] = 0;
    }

    for (let i = 0; i < 3; i++)
        messageVector[i][0] = (message[i]).charCodeAt(0) % 65;
   
    let cipherMatrix = new Array(3);
    for (let i = 0; i < 3; i++) {
        cipherMatrix[i] = new Array(1);
        cipherMatrix[i][0] = 0;
    }
   
    encrypt(cipherMatrix, keyMatrix, messageVector);
   
    let res = "";
   
    for (let i = 0; i < 3; i++)
        res += String.fromCharCode(cipherMatrix[i][0] + 65);
   
    return res;
}
