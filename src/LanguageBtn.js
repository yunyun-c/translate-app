import React from "react";
import ButtonGroup from "./ButtonGroup";

const LanguageBtn = ({ language, setLanguage }) => {
  return (
    <div className="language-btn">
      <ButtonGroup
        value={language}
        onClick={(e) => setLanguage(e.target.value)}
        selectedLanguage={language}
        setLanguage={setLanguage}
        buttons={[
          { label: " Detect Language", value: "auto" },
          { label: " English", value: "en" },
          { label: "French", value: "fr" },
          { label: "Spanish", value: "es", expand: true },
        ]}
      />
    </div>
  );
};

export default LanguageBtn;
