import { Check } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";

function ToolCart({ card, cart, setCart }) {
  const { name, description, price, period, tag, features, icon, tagType } =
    card;

  const [changeBuyNowText, setChangeBuyNowText] = useState(false);

  const handleBuyNow = (card) => {
    const isFound = cart.find((item) => item.id === card.id);
    if (isFound) {
      toast.error(`${name} is already in cart`);

      return;
    }
    setCart([...cart, card]);
    toast.success(`${name} is added to cart`);
    setChangeBuyNowText(true);
  };

  const handleTagColor = (type) => {
    switch (type) {
      case "new":
        return "bg-green-100 text-green-700";
      case "popular":
        return "bg-violet-100 text-violet-700";
      case "best-seller":
        return "bg-yellow-100 text-yellow-700";
      case "limited":
        return "bg-red-100 text-red-700";
      case "top-rated":
        return "bg-fuchsia-100 text-fuchsia-700";
    }
  };

  return (
    <div>
      <div className="bg-base-100  shadow-sm border border-[#F2F2F2] p-5 rounded-md space-y-3 transition-all duration-300 hover:scale-105 mb-10 ">
        <div className="flex justify-between items-center">
          <div className="bg-white border rounded-full p-1">
            <img className="w-10 h-10" src={icon} alt={name} />
          </div>
          <div className="">
            <p
              className={` ${handleTagColor(tagType)} text-[14px] font-semibold px-3 py-1 rounded-full`}
            >
              {tag}
            </p>
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
            {features.map((f, index) => (
              <li key={index} className="flex gap-2 text-[#627382]">
                {" "}
                <Check color="#30B868" /> {f}{" "}
              </li>
            ))}
          </ul>
        </div>

        <button
          onClick={() => handleBuyNow(card)}
          className="btn w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full"
        >
          {changeBuyNowText === true ? (
            <p className="flex gap-2">
              <Check /> Product added to cart{" "}
            </p>
          ) : (
            "Buy Now"
          )}
        </button>
      </div>
    </div>
  );
}

export default ToolCart;
