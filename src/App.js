import { useState } from "react";

import './styles.scss';

import Navbar from "./components/Navbar";
import { caesarEncryption, caesarDecryption } from "./components/ciphers/caesar";

const ciphersList = [
  "Caesar",
  "Affine",
  "Monoalphabetic",
  "ROT13",
  "Atbash",
  "Baconian",
  "Playfair",
  "Hill",
  "Homophobic Substitution",
  "Polygram Substitution"
]

const App = () => {
  const [isEncode, setIsEncode] = useState(true);
  const [decryptedChars, setDecryptedChars] = useState(0);
  const [cipher, setCipher] = useState(-1);
  const [cipherArgs, setCipherArgs] = useState([]);

  const [output, setOutput] = useState("");

  const [isCipherListHidden, setIsCipherListHidden] = useState(true);

  const toggleIsEncode = (flag) => {
    setIsEncode(flag);
  }

  const handleInput = (e) => {
    switch (cipher) {
      case 0:
        setOutput(isEncode ? caesarEncryption(e.target.value, parseInt(cipherArgs[0])) : caesarDecryption(e.target.value, cipherArgs[0]));
        break;
    }
  }

  return (
    <>
      {!isCipherListHidden && (
        <article className="cipher-select">
          <div className="cipher-select__options">
            <h1>Pick a cipher</h1>
            {ciphersList.map((c, i) => (
              <div key={i} onClick={() => {
                setCipher(i);
                setIsCipherListHidden(true);
                switch (i) {
                  case 0:
                    setCipherArgs([0]);
                    break;
                }
              }}>
                {c}
              </div>
            ))}
          </div>
          <div className="cipher-select__hide" onClick={() => setIsCipherListHidden(true)}></div>
        </article>
      )}
      <Navbar />
      <main>
        <section className="cipher-left">
          <article className="cipher-options">
            <div className="cipher-options__choice">
              <span className={`${isEncode ? "green" : ""}`} onClick={() => toggleIsEncode(true)}>
                ENCODE
              </span>
              &nbsp; | &nbsp;
              <span className={`${!isEncode ? "green" : ""}`} onClick={() => toggleIsEncode(false)}>
                DECODE
              </span>
            </div>
            <div className="cipher-options__divider"></div>
            <div className="cipher-options__cipher green" onClick={() => setIsCipherListHidden(false)}>
              <span>{cipher === -1 ? "Pick a cipher" : ciphersList[cipher]}</span>
              <span style={{"fontSize": "1.1rem"}}>&#9660;</span>
            </div>
            {cipher === 0 && (
              <>
                <div className="cipher-options__divider"></div>
                <div className="cipher-options__field">
                  <label htmlFor="cipher-options__field__shift">Shift</label>
                  <input type="text" placeholder="2" value={cipherArgs[0]} onChange={(e) => setCipherArgs([e.target.value])} />
                </div>
              </>
            )}
            {cipher === 1 && (
              <div className="cipher-options__divider"></div>
            )}
            {cipher === 2 && (
              <div className="cipher-options__divider"></div>
            )}
            {cipher === 3 && (
              <div className="cipher-options__divider"></div>
            )}
            {cipher === 4 && (
              <div className="cipher-options__divider"></div>
            )}
            {cipher === 5 && (
              <div className="cipher-options__divider"></div>
            )}
            {cipher === 6 && (
              <div className="cipher-options__divider"></div>
            )}
            {cipher === 7 && (
              <div className="cipher-options__divider"></div>
            )}
          </article>
          <h1 className="cipher-algorithm__header">
            { cipher === -1 ? "No cipher selected" : `${ciphersList[cipher]} algorithm` }
          </h1>
          { cipher !== -1 && (
            <article className="cipher-algorithm">
              hi
            </article>
          )}
        </section>
        <section className="cipherIO">
          <h1>Input here</h1>
          <textarea className="cipherInput" onChange={handleInput} />
          <div className="arrow-down"></div>
          <textarea disabled className="cipherOutput" value={output} />
          <div className="decrypted-chars">
            {isEncode ? "Encrypted" : "Decrypted"} <span className="green">{decryptedChars}</span> characters
          </div>
        </section>
      </main>
    </>
  )
}

export default App;
