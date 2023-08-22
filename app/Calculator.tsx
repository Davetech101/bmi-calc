"use client";
import { useState } from "react";
import { BsGenderMale, BsGenderFemale } from "react-icons/bs";

function Calculator(): React.JSX.Element {
  const [height, setHeight] = useState("cm");

  const heightChange = () => {
    setHeight((prev) => (prev === "ft" ? "cm" : "ft"));
  };

  const genderStyles =
    "text-3xl text-gray-300 p-10 bg-dark2 rounded-lg w-full flex flex-col items-center justify-center";

  const heightStyles = "bg-dark2 p-5 rounded-md outline-none m-1  w-full";

  const heightLabelStyles =
    "absolute top-5 right-5 text-gray-300 text-2xl text-italics";

  const widthStyles =
    "text-3xl text-gray-300 p-10 bg-dark2 rounded-lg w-full outline-none m-1";

  const widthLabelStyles = "text-2xl";

  return (
    <main className="p-10 max-w-3xl mx-auto mt-24">
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
        <div className="flex justify-center">
          <button className="text-2xl">CM</button>
          <button
            onClick={heightChange}
            className="bg-dark2 w-16 h-8 rounded-full m-5"
          >
            <div
              className={`w-8 h-8 bg-gray-300 rounded-full transition duration-250 ${
                height === "ft" ? "translate-x-full " : ""
              }`}
            ></div>
          </button>
          <button className="text-2xl">FT</button>
        </div>
        <div className="relative">
          <input type="number" id="cm" className={heightStyles} />
          <label htmlFor="cm" className={heightLabelStyles}>
            cm
          </label>
        </div>

        <div className="flex gap-10 justify-between">
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

        <div className="flex mt-7 gap-10">
          <div className="">
            <input type="number" id="kg" className={widthStyles} />
            <label htmlFor="weight" className={widthLabelStyles}>
              Weight (kg)
            </label>
          </div>
          <div className="">
            <input type="number" id="kg" className={widthStyles} />
            <label htmlFor="kg" className={widthLabelStyles}>
              Age (years)
            </label>
          </div>
        </div>
      </div>

      <button className="text-gray-300 mt-5 bg-dark2 px-10 py-5 w-full text-2xl rounded-lg">
        Calculate
      </button>
    </main>
  );
}

export default Calculator;
