import { useState } from "react";

import './styles.scss';
import Navbar from "./components/Navbar";

const ciphersList = [
  "Simple Substitution",
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
  const [cipher, setCipher] = useState(0);

  const toggleIsEncode = (flag) => {
    setIsEncode(flag);
  }

  const handleInput = () => {
    alert('hi');
  }

  return (
    <>
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
            <div className="cipher-options__cipher">
              Pick a cipher
            </div>
            <div className="divider"></div>
          </article>
          <h1 className="cipher-algorithm__header">
            { cipher === null ? "No cipher selected" : `${ciphersList[cipher]} algorithm` }
          </h1>
          { cipher !== null && (
            <article className="cipher-algorithm">
              hi
            </article>
          )}
        </section>
        <section className="cipherIO">
          <h1>Input here</h1>
          <textarea className="cipherInput" onChange={handleInput} />
          <div class="arrow-down"></div>
          <textarea disabled className="cipherOutput" />
          <div className="decrypted-chars">
            {isEncode ? "Encrypted" : "Decrypted"} <span class="green">{decryptedChars}</span> characters
          </div>
        </section>
      </main>
    </>
  )
}

export default App;
