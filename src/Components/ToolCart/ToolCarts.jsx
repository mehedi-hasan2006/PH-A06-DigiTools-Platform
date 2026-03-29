import { use } from "react";
import ToolCart from "./ToolCart";

function ToolCarts({ toolDataPromise }) {
  const toolCardsData = use(toolDataPromise);

  return (
    <div className="container mx-auto mt-8">
      <div className=" grid grid-cols-3 gap-5">
        {toolCardsData.map((card) => (
          <ToolCart key={card.id} card={card}></ToolCart>
        ))}
      </div>
    </div>
  );
}

export default ToolCarts;
