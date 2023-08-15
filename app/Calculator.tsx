import React from "react";
import { BsGenderMale, BsGenderFemale } from "react-icons/bs";

function Calculator(): React.JSX.Element {
  return (
    <main>
      <div className="">
        <button type="button" className="">
          <BsGenderMale />
        </button>

        <button type="button" className="">
          <BsGenderFemale />
        </button>
      </div>
    </main>
  );
}

export default Calculator;
