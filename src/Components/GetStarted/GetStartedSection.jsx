import { User } from "lucide-react";

function GetStartedSection() {
  return (
    <div className="bg-gray-100 lg:h-140 flex items-center ">
      <div className="container mx-auto p-5 ">
        <div className="text-center mb-5">
            <h1 className="font-bold text-[30px] md:text-[36px] lg:text-[48px]">Get Started in 3 Steps</h1>
            <p className="text-gray-500">Start using premium digital tools in minutes, not hours.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          <div className="bg-white shadow rounded-md p-5 space-y-3 h-80">
            <div className="flex justify-end">
              <span className=" bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full py-1 px-2">
                01
              </span>
            </div>
            <div className="flex justify-center">
              <div className="bg-violet-100 p-5 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="url(#userGradient)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-user-icon lucide-user"
                >
                  <defs>
                    <linearGradient
                      id="userGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#4F39F6" />
                      <stop offset="100%" stopColor="#9514FA" />
                    </linearGradient>
                  </defs>

                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
            </div>
            <div className="text-center">
              <h1 className="font-bold text-[24px] mb-2">Create Account</h1>
              <p className="text-[16px]/[20px] text-gray-500">
                Sign up for free in seconds. No credit card required to get
                started.
              </p>
            </div>
          </div>

          <div className="bg-white shadow rounded-md p-5 space-y-3 h-80">
            <div className="flex justify-end">
              <span className=" bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full py-1 px-2">
                02
              </span>
            </div>
            <div className="flex justify-center">
              <div className="bg-violet-100 p-5 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="url(#userGradient)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-package-search-icon lucide-package-search"
                >
                  <defs>
                    <linearGradient
                      id="userGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#4F39F6" />
                      <stop offset="100%" stopColor="#9514FA" />
                    </linearGradient>
                  </defs>

                  <path d="M12 22V12" />
                  <path d="M20.27 18.27 22 20" />
                  <path d="M21 10.498V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l.98-.559" />
                  <path d="M3.29 7 12 12l8.71-5" />
                  <path d="m7.5 4.27 8.997 5.148" />
                  <circle cx="18.5" cy="16.5" r="2.5" />
                </svg>
              </div>
            </div>
            <div className="text-center">
              <h1 className="font-bold text-[24px] mb-2">Choose Products</h1>
              <p className="text-[16px]/[20px] text-gray-500">
                Browse our catalog and select the tools that fit your needs.
              </p>
            </div>
          </div>

          <div className="bg-white shadow rounded-md p-5 space-y-3 h-80">
            <div className="flex justify-end">
              <span className=" bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full py-1 px-2">
                03
              </span>
            </div>
            <div className="flex justify-center">
              <div className="bg-violet-100 p-5 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="url(#userGradient)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-rocket-icon lucide-rocket"
                >
                  <defs>
                    <linearGradient
                      id="userGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#4F39F6" />
                      <stop offset="100%" stopColor="#9514FA" />
                    </linearGradient>
                  </defs>

                  <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09" />
                  <path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z" />
                  <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05" />
                </svg>
              </div>
            </div>
            <div className="text-center">
              <h1 className="font-bold text-[24px] mb-2">Start Creating</h1>
              <p className="text-[16px]/[20px] text-gray-500">
                Download and start using your premium tools immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetStartedSection;
