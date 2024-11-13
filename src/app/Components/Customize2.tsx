// import react from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const Customize2 = () => {
  return (
    <>
      <div className="py-[140px] px-[220px] w-[1921px] h-[812.09px] top-[3268px] bg-white flex flex-row items-center">
        <div className="w-[714px] h-[532.09px] bg-[#C4DEFD] ml-4"></div>
        <div className="w-[669px] h-[411px] ml-24">
          <h1
            className={`font-bold text-[72px] leading-[87.14px] tracking-[-0.02em] text-[#212529] ${inter.className}`}
          >
            Customise it to your needs
          </h1>
          <p
            className={`font-normal text-[18px] leading-[30px] tracking-[-0.02em] text-[#212529] mt-6 ${inter.className}`}
          >
            Customise the app with plugins, custom themes and multiple text
            editors (Rich Text or Markdown). Or create your own scripts and
            plugins using the Extension API.
          </p>
          <div className="w-[171px] h-[63px] rounded-md px-10 py-5 bg-[#4F9CF9] mt-12">
            <button
              className={`font-medium text-[18px] leading-[23px] tracking-[-0.02em] text-white flex items-center gap-2 ${inter.className}`}
            >
              Let’s Go
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

export default Customize2;