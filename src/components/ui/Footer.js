import React from "react";

const Footer = ({ toggleDark }) => {
  return (
    <footer
      className={` ${
        toggleDark
          ? "border-gray-800 text-white-dark-mode"
          : "border-gray-200 text-very-dark-blue-light-mode"
      } w-full text-center border-t  p-4 pin-b italic`}
    >
      <span>
        Developed by{" "}
        <a className='wavvy' href='https://bulenteroglu.co.uk/'>
          Bülent Eroğlu
        </a>
      </span>
    </footer>
  );
};

export default Footer;
