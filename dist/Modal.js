import { useState } from "react";
import React from "react";
import ReactDOM from "react-dom";
export const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  function isToggle() {
    setIsShowing(!isShowing);
  }

  return {
    isShowing,
    isToggle
  };
};
export const Modal = ({
  isShowing,
  hide,
  yourText
}) => isShowing ? /*#__PURE__*/ReactDOM.createPortal( /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
  className: "modal-overlay"
}, /*#__PURE__*/React.createElement("div", {
  className: "modal-wrapper"
}, /*#__PURE__*/React.createElement("div", {
  className: "modal"
}, /*#__PURE__*/React.createElement("div", {
  className: "modal-body"
}, yourText), /*#__PURE__*/React.createElement("button", {
  type: "button",
  className: "modal-close-button",
  onClick: hide
}, /*#__PURE__*/React.createElement("span", null, "\xD7"))))), /*#__PURE__*/React.createElement("style", {
  jsx: "true"
}, `
            .modal-overlay {
              position: fixed;
              top: 0;
              left: 0;
              width: 100vw;
              height: 100vh;
              z-index: 1040;
              background-color: rgba(0, 0, 0, 0.5);
            }

            .modal-wrapper {
              position: fixed;
              top: 0;
              left: 0;
              z-index: 1050;
              width: 100%;
              height: 100%;
              overflow-x: hidden;
              overflow-y: auto;
              outline: 0;
              display: flex;
              align-items: center;
            }

            .modal {
              z-index: 100;
              background: #fff;
              position: relative;
              margin: auto;
              border-radius: 5px;
              max-width: 500px;
              width: 80%;
              padding: 1rem;
            }
            .modal-close-button {
              position: absolute;
              top: 5px;
              right: 5px;
              font-size: 1.4rem;
              font-weight: 700;
              color: #000;
              cursor: pointer;
              border: none;
              background: transparent;
            }
          `)), document.body) : null;