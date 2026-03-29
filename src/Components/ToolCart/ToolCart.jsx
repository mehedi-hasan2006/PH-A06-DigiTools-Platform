import { Check } from "lucide-react";

function ToolCart({ card }) {
  const { name, description, price, period, tag, features, icon } = card;
  console.log(icon);

  return (
    <div>
      <div className="bg-base-100 shadow-sm border border-[#F2F2F2] p-5 rounded-md space-y-3 transition-all duration-300 hover:scale-105 mb-10 ">
        <div className="flex justify-between items-center">
          <div className="bg-white border rounded-full p-1">
            <img className="w-10 h-10" src={icon} alt={name} />
          </div>
          <div className="">
            <p className="bg-amber-200 px-3 py-1 rounded-full">{tag}</p>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-[24px] mb-4"> {name} </h1>
          <p className="text-gray-400 mb-4"> {description} </p>
          <p>
            {" "}
            <span className="font-bold text-[24px]">${price} </span>{" "}
            <span className="text-gray-400">/ {period} </span>{" "}
          </p>
        </div>
        <div>
          <ul>
            {features.map((f) => (
              <li className="flex gap-2 text-[#627382]">
                {" "}
                <Check color="#30B868" /> {f}{" "}
              </li>
            ))}
          </ul>
        </div>

        <button className="btn w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full">
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default ToolCart;
