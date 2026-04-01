import { Suspense, useState } from "react";
import NavBar from "./Components/Navbar/NavBar";
import ToolCarts from "./Components/ToolCart/ToolCarts";
import LoadingSpiner from "./Components/LoadingSpiner";
import Carts from "./Components/Carts/Carts";
import PricingSections from "./Components/PricingSections/PricingSections";
import GetStartedSection from "./Components/GetStarted/GetStartedSection";
import Hero from "./Components/Hero";
import Footer from "daisyui/components/footer";
import FooterSection from "./Components/FooterSection";

const toolDataPromise = fetch("/data.json").then((res) => res.json());

const pricingDataPromise = async () => {
  const res = await fetch("/pricingData.json");
  return res.json();
};

function App() {
  const pricingData = pricingDataPromise();

  const [cart, setCart] = useState([]);

  const [buttonToggle, setButtonToggle] = useState("product");
  const handleButton = (item) => {
    setButtonToggle(item);
  };
  return (
    <>
      <NavBar cart={cart} />

      <Hero></Hero>

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
          Cart ({cart.length})
        </button>
      </div>

      {buttonToggle === "product" ? (
        <Suspense fallback={<LoadingSpiner></LoadingSpiner>}>
          <ToolCarts
            toolDataPromise={toolDataPromise}
            cart={cart}
            setCart={setCart}
          >
            {" "}
          </ToolCarts>
        </Suspense>
      ) : (
        <Carts cart={cart} setCart={setCart}></Carts>
      )}

      <GetStartedSection></GetStartedSection>

      <Suspense fallback={<LoadingSpiner></LoadingSpiner>}>
        <PricingSections pricingData={pricingData}> </PricingSections>
      </Suspense>

      <FooterSection></FooterSection>
    </>
  );
}

export default App;
