import React, { useState } from "react";

import SoundCopy from "./SoundCopy";
import LanguageBtn from "./LanguageBtn";
import TranslateBtn from "./TranslateBtn";

const BtnIcon = () => (
  <span>
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6 20H18" stroke="#F9FAFB" stroke-width="2" />
      <path d="M9 12H15" stroke="#F9FAFB" stroke-width="2" />
      <path
        d="M7 17L10.1165 8.27376C10.9024 6.0734 11.2953 4.97321 12 4.97321C12.7047 4.97321 13.0976 6.07339 13.8835 8.27375L17 17"
        stroke="#F9FAFB"
        stroke-width="2"
      />
    </svg>
  </span>
);

const TranslateApp = () => {
  const [text, setText] = useState("Hello, how are you");
  const [translatedText, setTranslatedText] = useState("");
  const [language, setLanguage] = useState("");
  const [translateTo, setTranslateTo] = useState("");

  const translateText = async () => {
    const response = await fetch(
      `https://api.mymemory.translated.net/get?q=${text}&langpair=${language}|${translateTo}`
    );

    console.log([text, language, translateTo]);
    const data = await response.json();
    setTranslatedText(data.responseData.translatedText);
  };

  return (
    <div className="translate-container">
      <div id="user-input">
        <LanguageBtn language={language} setLanguage={setLanguage} />

        <hr />
        <div className="text">
          <textarea
            value={text}
            maxlength="500"
            onChange={(e) => setText(e.target.value)}
          />

          <span className="word-counts">13/500</span>
          <div className="action-btn">
            <SoundCopy />

            <button onClick={translateText} className="submit-btn">
              <BtnIcon />
              Translate
            </button>
          </div>
        </div>
      </div>
      <div id="translate">
        <TranslateBtn
          translateTo={translateTo}
          setTranslateTo={setTranslateTo}
        />
        <hr />
        <div className="text">
          <p>{translatedText}</p>

          <div className="action-btn">
            <SoundCopy />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TranslateApp;
