import React from "react";

function Carts({ cart, setCart }) {
  const handlePayment = () => {
    setCart([]);
  };

  return (
    <div className="container mx-auto border shadow border-[#F2F2F2] p-5 rounded-md mt-8">
      <div>
        <h2 className="font-bold text-[24px] mb-3">Your Carts</h2>
      </div>
      <div className="space-y-5">
        {cart.map((c) => (
          <div className="bg-gray-100 p-5 rounded-lg">
            <div className="flex justify-between items-center">
              <div className="flex gap-3 items-center">
                <div className="bg-white p-1.5 rounded-full">
                  <img className="w-10 h-10" src={c.icon} alt="" />
                </div>
                <div>
                  <h1 className="font-semibold text-[24px]"> {c.name} </h1>
                  <p> ${c.price} </p>
                </div>
              </div>
              <div>
                <button className="text-red-500 font-semibold cursor-pointer bg-transparent border-none btn">
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between mt-10 mb-5">
        <p className="text-gray-400">Total :</p>
        <p className="font-bold text-[24px]"> $0 </p>
      </div>

      <div>
        <button
          onClick={handlePayment}
          className="btn w-full rounded-full text-white font-semibold bg-linear-to-r from-[#4F39F6] to-[#9514FA]"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default Carts;
