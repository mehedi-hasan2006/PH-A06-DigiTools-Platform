import { use } from "react";
import ToolCart from "./ToolCart";

function ToolCarts({ toolDataPromise, cart, setCart }) {
  const toolCardsData = use(toolDataPromise);

  return (
    <div className="container mx-auto mt-8 px-5">
      <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {toolCardsData.map((card) => (
          <ToolCart key={card.id} card={card} cart={cart} setCart={setCart} ></ToolCart>
        ))}
      </div>
    </div>
  );
}

export default ToolCarts;
