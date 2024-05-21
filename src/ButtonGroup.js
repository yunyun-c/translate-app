import React from "react";

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

const ButtonGroup = ({ buttons, selectedLanguage, setLanguage, expand }) => {
  return buttons.map((button) => {
    const isActive = selectedLanguage === button.value;
    const handleClick = () => setLanguage(button.value);

    return (
      <button
        className={`${expand ? "expand-down" : ""} ${isActive ? "active" : ""}`}
        onClick={handleClick}
        value={button.value}
      >
        {button.label}
        {expand && (
          <span>
            <ArrowIcon />
          </span>
        )}
      </button>
    );
  });
};

export default ButtonGroup;
