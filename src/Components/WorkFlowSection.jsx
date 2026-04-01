import React from "react";

function WorkFlowSection() {
  return (
    <div>
      <section className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white py-20 px-6 md:px-16 text-center mt-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready To Transform Your Workflow?
          </h2>

          <p className="text-white/80 mb-10">
            Join thousands of professionals who are already using Digitools to
            work smarter.
            <br className="hidden md:block" />
            Start your free trial today.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
            <button className="bg-white text-purple-600 font-medium px-6 py-3 rounded-full hover:scale-105 transition">
              Explore Products
            </button>

            <button className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-purple-600 transition">
              View Pricing
            </button>
          </div>

          <p className="text-sm text-white/70">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </section>
    </div>
  );
}

export default WorkFlowSection;
