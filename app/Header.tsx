import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

function Header(): React.JSX.Element {
  return (
    <header className="bg-dark fixed top-0 left-0 w-screen text-gray-300 h-28 flex items-center p-10 justify-between shadow-xl">
      <button className="">
        <RxHamburgerMenu size="3rem" />
      </button>
      <p className="uppercase text-2xl">bmi calculator</p>
    </header>
  );
}

export default Header;
