function Stats() {
  return (
    <section className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white py-10 px-6 md:px-16 mt-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 text-center items-center ">
        <div className="py-6">
          <h2 className="text-4xl md:text-5xl font-bold">50K+</h2>
          <p className="mt-2 text-white/80">Active Users</p>
        </div>

        <div className="hidden md:block h-16 w-[1px] bg-white/30 mx-auto"></div>

        <div className="py-6">
          <h2 className="text-4xl md:text-5xl font-bold">200+</h2>
          <p className="mt-2 text-white/80">Premium Tools</p>
        </div>

        <div className="hidden md:block h-16 w-[1px] bg-white/30 mx-auto"></div>

        <div className="py-6">
          <h2 className="text-4xl md:text-5xl font-bold">4.9</h2>
          <p className="mt-2 text-white/80">Rating</p>
        </div>
      </div>
    </section>
  );
}

export default Stats;
