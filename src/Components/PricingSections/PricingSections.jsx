import { use } from "react";
import PricingSection from "./PricingSection";

function PricingSections({ pricingData }) {
  const getData = use(pricingData);
  return (
    <div className="container mx-auto mt-5 px-5 mb-8">
      <div className="text-center mb-8">
        <h1 className="font-bold text-[30px] md:text-[36px] lg:text-[48px]">
          Simple, Transparent Pricing
        </h1>
        <p className="text-gray-500">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 ">
        {getData.map((data) => (
          <PricingSection key={data.id} data={data}></PricingSection>
        ))}
      </div>
    </div>
  );
}

export default PricingSections;
