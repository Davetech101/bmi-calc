import React from "react";
import { BsGenderMale, BsGenderFemale } from "react-icons/bs";

function Calculator(): React.JSX.Element {
  const genderStyles =
    "text-3xl text-gray-300 p-10 bg-dark2 rounded-lg w-full flex flex-col items-center justify-center";

  const heightStyles =
    "bg-dark2 p-5 rounded-md outline-none m-1 placeholder:text-right ";

  const heightLabelStyles = "absolute top-5 right-5";

  return (
    <main className="p-10">
      <div className="flex items-center justify-between gap-5">
        <button type="button" className={genderStyles}>
          <BsGenderMale size="8rem" />
          <p className="mt-7">Male</p>
        </button>

        <button type="button" className={genderStyles}>
          <BsGenderFemale size="8rem" />
          <p className="mt-7">Female</p>
        </button>
      </div>

      <div className="mt-7 text-gray-300">
        <button className="text-2xl">CM</button>
        <button className="text-2xl">FT</button>
        <div className="relative">
          <input type="number" id="cm" className={heightStyles} />
          <label htmlFor="cm" className={heightLabelStyles}>
            cm
          </label>
        </div>

        <div className="flex">
          <div className="relative">
            <input type="number" id="ft" className={heightStyles} />
            <label htmlFor="ft" className={heightLabelStyles}>
              ft
            </label>
          </div>
          <div className="relative">
            <input type="number" id="inches" className={heightStyles} />
            <label htmlFor="inches" className={heightLabelStyles}>
              inches
            </label>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Calculator;
