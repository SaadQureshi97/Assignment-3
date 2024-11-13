// import react from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const Customize = () => {
  return (
    <>
      <div className="py-[140px] px-[220px] w-[1921px] h-[759px] top-[2509px] bg-[#043873] flex flex-row items-center">
        <div className="w-[697px] h-[294px]">
          <div className="w-[697px] h-[171px]">
            <h1
              className={`font-bold text-[72px] leading-[87.14px] tracking-[-0.02em] text-white ${inter.className}`}
            >
              Use as Extension
            </h1>
            <p
              className={`font-normal text-[18px] leading-[30px] tracking-[-0.02em] text-white mt-6 ${inter.className}`}
            >
              Use the web clipper extension, available on Chrome and Firefox, to
              save web pages or take screenshots as notes.
            </p>
            <div className="w-[171px] h-[63px] rounded-md py-5 px-10 bg-[#4F9CF9] mt-12">
              <button
                className={`font-medium text-[18px] leading-[23px] tracking-[-0.02em] text-white ${inter.className} flex items-center gap-[4px]`}
              >
                Let’s Go
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-[14px]"
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
        <div className="w-[686px] h-[479px] bg-[#C4DEFD] ml-24"></div>
      </div>
    </>
  );
};

export default Customize;