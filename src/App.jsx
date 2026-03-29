import { useState } from "react";
import NavBar from "./Components/Navbar/NavBar";

function App() {
  const [buttonToggle, setButtonToggle] = useState("product");
  const handleButton = (item) => {
    setButtonToggle(item);
  };
  return (
    <>
      <NavBar />

      {/* name of each tab group should be unique  linear-to-r from-[#4F39F6] to-[#9514FA]*/}
      {/* name of each tab group should be unique */}
      <div className="flex justify-center gap-5 mt-5">
        <button
          onClick={() => handleButton("product")}
          className={`px-3 cursor-pointer py-2 font-semibold w-30  rounded-full  ${buttonToggle === "product" && "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"}`}
        >
          Products
        </button>
        <button
          onClick={() => handleButton("cart")}
          className={`px-3 cursor-pointer py-2 font-semibold w-30 text-black rounded-full ${buttonToggle === "cart" && "text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]"}`}
        >
          Cart{" "}
        </button>
      </div>
    </>
  );
}

export default App;
