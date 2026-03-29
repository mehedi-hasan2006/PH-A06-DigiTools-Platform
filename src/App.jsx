import { Suspense, useState } from "react";
import NavBar from "./Components/Navbar/NavBar";
import ToolCarts from "./Components/ToolCart/ToolCarts";
import LoadingSpiner from "./Components/LoadingSpiner";

const toolDataPromise = fetch("/data.json").then((res) => res.json());

function App() {
  const [buttonToggle, setButtonToggle] = useState("product");
  const handleButton = (item) => {
    setButtonToggle(item);
  };
  return (
    <>
      <NavBar />

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

      <Suspense fallback={<LoadingSpiner></LoadingSpiner>}>
        <ToolCarts toolDataPromise={toolDataPromise}> </ToolCarts>
      </Suspense>
    </>
  );
}

export default App;
