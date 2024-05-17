import React, { useState } from "react";

const ArrowIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 6L8 10L4 6" stroke="#6C727F" stroke-width="2" />
  </svg>
);

const OptionsBtn = ({
  children,
  value,
  selectedLanguage,
  setLanguage,
  expand,
}) => {
  const isActive = value === selectedLanguage;
  const handleClick = () => setLanguage(value);

  return (
    <button
      className={`${expand ? "expand-down" : ""} ${isActive ? "active" : ""}`}
      onClick={handleClick}
    >
      {children}
      {expand && (
        <span>
          <ArrowIcon />
        </span>
      )}
    </button>
  );
};

const ButtonGroup = ({ buttons }) => {
  const [activeButton, setActiveButton] = useState(null);

  return (
    <div>
      {buttons.map((button) => (
        <OptionsBtn
          key={button.value}
          value={button.value}
          isActive={activeButton === button.value}
          onClick={() => setActiveButton(button.value)}
        >
          {button.label}
        </OptionsBtn>
      ))}
    </div>
  );
};

export default ButtonGroup;
