import { useState } from "react";

import './styles.scss';

import Navbar from "./components/Navbar";
import { caesarEncryption, caesarDecryption } from "./components/ciphers/caesar";
import { affineEncryption, affineDecryption } from "./components/ciphers/affine";
import { rot13Encryption, rot13Decryption } from "./components/ciphers/rot13";
import { atbashEncryption, atbashDecryption } from "./components/ciphers/atbash";
import { baconianEncryption, baconianDecryption } from "./components/ciphers/baconian";
import { hillEncryption } from "./components/ciphers/hill";
import { vigenereEncryption, vigenereDecryption } from "./components/ciphers/vigenere";

import img0 from "./utils/images/caesar.png";
import img1 from "./utils/images/affine.png";
import img2 from "./utils/images/rot13.png";
import img3 from "./utils/images/atbash.png";
import img4 from "./utils/images/baconian.png";
import img5 from "./utils/images/hill.png";
import img6 from "./utils/images/vigenere.png";

const ciphersList = [
  "Caesar",
  "Affine",
  "ROT13",
  "Atbash",
  "Baconian",
  "3x3 Hill (3 char message)",
  "Vigenere"
]

const App = () => {
  const [isEncode, setIsEncode] = useState(true);
  const [cipher, setCipher] = useState(-1);
  const [cipherArgs, setCipherArgs] = useState([]);

  const [output, setOutput] = useState("");

  const [isCipherListHidden, setIsCipherListHidden] = useState(true);

  const toggleIsEncode = (flag) => {
    setIsEncode(flag);
  }

  const handleInput = (e) => {
    if (!e.target.value) 
      return setOutput("");

    switch (cipher) {
      case 0:
        setOutput(isEncode ? caesarEncryption(e.target.value, Number(cipherArgs[0])) : caesarDecryption(e.target.value, Number(cipherArgs[0])));
        break;

      case 1:
        setOutput(isEncode ? affineEncryption(e.target.value, Number(cipherArgs[0]), Number(cipherArgs[1])) : affineDecryption(e.target.value, Number(cipherArgs[0]), Number(cipherArgs[1])));
        break;

      case 2:
        setOutput(isEncode ? rot13Encryption(e.target.value) : rot13Decryption(e.target.value));
        break;

      case 3:
        setOutput(isEncode ? atbashEncryption(e.target.value) : atbashDecryption(e.target.value));
        break;

      case 4:
        setOutput(isEncode ? baconianEncryption(e.target.value.toUpperCase()) : baconianDecryption(e.target.value.toLowerCase()));
        break;

      case 5:
        setOutput(isEncode ? hillEncryption(e.target.value, cipherArgs[0]) : "TO DO");
        break;

      case 6:
        setOutput(isEncode ? vigenereEncryption(e.target.value, cipherArgs[0]) : vigenereDecryption(e.target.value, cipherArgs[0]));
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
                  case 1:
                    setCipherArgs([3, 3]);
                    break;
                  case 5:
                    setCipherArgs(["ASDFGHJKL"]);
                    break;
                  case 6:
                    setCipherArgs(["key"]);
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
                  <input id="cipher-options__field__shift" type="text" placeholder="2" value={cipherArgs[0]} onChange={(e) => setCipherArgs([e.target.value])} />
                </div>
              </>
            )}
            {cipher === 1 && (
              <>
                <div className="cipher-options__divider"></div>
                <div className="cipher-options__field">
                  <label htmlFor="cipher-options__field__coprime1">Slope (coprime with 26)</label>
                  <input id="cipher-options__field__coprime1" type="text" placeholder="3" value={cipherArgs[0]} onChange={(e) => setCipherArgs(pre => [e.target.value, pre[1]])} />
                </div>
                <div className="cipher-options__field">
                  <label htmlFor="cipher-options__field__coprime2">Intercept</label>
                  <input id="cipher-options__field__coprime2" type="text" placeholder="3" value={cipherArgs[1]} onChange={(e) => setCipherArgs(pre => [pre[0], e.target.value])} />
                </div>
              </>
            )}
            {cipher === 5 && (
              <>
                <div className="cipher-options__divider"></div>
                <div className="cipher-options__field">
                  <label htmlFor="cipher-options__field__hill-key">Key</label>
                  <input id="cipher-options__field__hill-key" type="text" placeholder="9 char ASCII key" value={cipherArgs[0]} onChange={(e) => setCipherArgs([e.target.value])} />
                </div>
              </>
            )}
            {cipher === 6 && (
              <>
                <div className="cipher-options__divider"></div>
                <div className="cipher-options__field">
                  <label htmlFor="cipher-options__field__vigenere-key">Key</label>
                  <input id="cipher-options__field__vigenere-key" type="text" placeholder="key" value={cipherArgs[0]} onChange={(e) => setCipherArgs([e.target.value])} />
                </div>
              </>
            )}
          </article>
          <h1 className="cipher-algorithm__header">
            { cipher === -1 ? "No cipher selected" : `${ciphersList[cipher]} algorithm` }
          </h1>
          { cipher !== -1 && (
            <article className="cipher-algorithm">
              { cipher === 0 && <img src={img0} /> }
              { cipher === 1 && <img src={img1} /> }
              { cipher === 2 && <img src={img2} /> }
              { cipher === 3 && <img src={img3} /> }
              { cipher === 4 && <img src={img4} /> }
              { cipher === 5 && <img src={img5} /> }
              { cipher === 6 && <img src={img6} /> }
            </article>
          )}
        </section>
        <section className="cipherIO">
          <h1>Input here</h1>
          <textarea className="cipherInput" onChange={handleInput} />
          <div className="arrow-down"></div>
          <textarea disabled className="cipherOutput" value={output} />
          <div className="decrypted-chars">
            {isEncode ? "Encrypted" : "Decrypted"} <span className="green">{output.length}</span> characters
          </div>
        </section>
      </main>
    </>
  )
}

export default App;
