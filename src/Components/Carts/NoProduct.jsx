import { Frown } from "lucide-react";


function NoProduct() {
  return (
    <div className="container mx-auto border border-gray-300 h-100 mt-8 rounded-xl bg-gray-50 flex justify-center items-center px-5">
      <div className="text-center ">
        <div className="flex justify-center ">
          <Frown size={80} color="#e63737" />
        </div>
        <p className="font-semibold text-[22px]">No Items Available</p>
      </div>
    </div>
  );
}

export default NoProduct;
