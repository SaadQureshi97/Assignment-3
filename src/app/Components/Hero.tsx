// import react from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const Hero = () => {
  return (
    <>
      <div className="py-[140px] px-[220px] w-[1920px] h-[829px] top-[92px] bg-[#043873] flex flex-row">
        <div className="w-[656px] h-[361px] flex items-center">
          <div className="w-[656px] h-[238px]">
            <h2
              className={`font-bold text-[64px] leading-[77.45px] tracking-[-0.02em] text-white ${inter.className}`}
            >
              Get More Done with Whitespace
            </h2>
            <p
              className={`font-normal text-[18px] leading-[30px] tracking-[-0.02em] text-white mt-6 ${inter.className}`}
            >
              Project management software that enables your teams to
              collaborate, plan, analyze and manage everyday task.
            </p>
            <div className="w-[219px] h-[63px] rounded-lg p-5 bg-[#4F9CF9] mt-12">
              <button
                className={`font-medium text-[18px] leading-[23px] tracking-[-0.02em] text-white ${inter.className} flex items-center gap-[4px]`}
              >
                Try Whitepace free
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-3"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="w-[824px] h-[549px] bg-[#C4DEFD] ml-1"></div>
      </div>
    </>
  );
};

export default Hero;