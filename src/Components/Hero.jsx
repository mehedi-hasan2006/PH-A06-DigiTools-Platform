import circle from "../assets/circle.png";
import banner from "../assets/banner.png";
import "../index.css";

function Hero() {
  return (
    <div className="container mx-auto mt-10 md:flex gap-15 px-5">
      <div className="space-y-3">
        <span className="    rounded-full  text-violet-600 ">
          <p className="flex items-center gap-2 bg-violet-100 rounded-full px-3 py-1">
            <img className="w-5 h-5" src={circle} alt="" />
            <span>New: AI-Powered Tools Available</span>
          </p>
        </span>

        <div>
          <h1 className=" text-[42px] md:text-5xl lg:text-[72px] font-bold">
            Supercharge Your Digital Workflow
          </h1>
          <p className="text-gray-400">
            Access premium AI tools, design assets, templates, and productivity{" "}
            <br />
            software—all in one place. Start creating faster today. Explore
            Products
          </p>
        </div>
        <div className="flex gap-5 justify-center md:justify-normal">
          <button className="btn rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">
            Explore Products
          </button>

          <button className="btn  bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent rounded-full border-2 border-[#4F39F6]">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="url(#userGradient)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-play-icon lucide-play"
              >
                <defs>
                  <linearGradient
                    id="userGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stop-color="#4F39F6" />
                    <stop offset="100%" stop-color="#9514FA" />
                  </linearGradient>
                </defs>

                <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
              </svg>
            </span>
            Watch Demo
          </button>
        </div>
      </div>
      <div className="pt-5 flex justify-center items-center">
        <img src={banner} alt="" />
      </div>
    </div>
  );
}

export default Hero;
