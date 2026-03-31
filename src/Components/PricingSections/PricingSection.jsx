import { Check } from "lucide-react";
import React from "react";

function PricingSection({ data }) {
  return (
    <div
      className={`flex flex-col  shadow p-5 rounded-md space-y-3 relative ${data.isPopular ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : "bg-gray-100"}`}
    >
      <div className="flex justify-center">
        {data.isPopular && (
          <span className="bg-amber-100 text-amber-700 font-medium px-3 py-1 rounded-full  absolute -top-4">
            {" "}
            {data.badge}{" "}
          </span>
        )}
      </div>
      <div>
        <h1 className="font-bold text-2xl"> {data.plan}</h1>
        <p className={`text-gray-400 ${data.isPopular && "text-white"}`}>
          {" "}
          {data.description}
        </p>
      </div>
      <div className="">
        <p>
          <span className="font-bold text-4xl">${data.price}</span>
          <span
            className={`text-gray-400 font-[20px] ${data.isPopular && "text-white"}`}
          >
            /{data.billing}{" "}
          </span>
        </p>
      </div>
      <div className="flex-1">
        <ul>
          {data.features.map((f, index) => (
            <li
              key={index}
              className={`flex text-gray-500 font-medium ${data.isPopular && "text-white"}`}
            >
              {" "}
              <Check color={`${data.isPopular ? "white" : "green"}`}></Check>
              {f}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <button
          className={`btn w-full rounded-full shadow-none ${
            data.isPopular
              ? "bg-white"
              : "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"
          }`}
        >
          {data.isPopular ? (
            <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
              {data.button.text}
            </span>
          ) : (
            data.button.text
          )}
        </button>
      </div>
    </div>
  );
}

export default PricingSection;
