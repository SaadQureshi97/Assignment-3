// import react from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const Work = () => {
  return (
    <>
      <div className="py-[140px] px-[220px] w-[1921px] h-[574px] top-[4080px] bg-[#043873] ">
        <div className="w-[1481px] h-[294px] flex flex-col items-center">
          <div className="w-[1064px] h-[171px] text-center ">
            <h1
              className={`font-bold text-[72px] leading-[87.14px] tracking-[-0.02em] text-white ${inter.className}`}
            >
              Your work, everywhere you are
            </h1>
            <p
              className={`font-normal text-[18px] leading-[30px] tracking-[-0.02em] text-white mt-6 ${inter.className}`}
            >
              Access your notes from your computer, phone or tablet by
              synchronising with various services, including whitepace, Dropbox
              and OneDrive. The app is available on Windows, macOS, Linux,
              Android and iOS. A terminal app is also available!
            </p>
          </div>
          <div className="w-[195px] h-[63px] rounded-lg px-10 py-5 bg-[#4F9CF9] mt-12">
            <button
              className={`font-medium text-[18px] leading-[23px] tracking-[-0.02em] text-white ${inter.className} flex items-center gap-[7px]`}
            >
              Try Taskey
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-4"
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
    </>
  );
};

export default Work;