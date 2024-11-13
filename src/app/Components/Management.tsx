
// import react from "react";
import Image from "next/image";
import logo from "@/app/Assests/shadow logo.png";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const Management = () => {
  return (
    <>
      <div className="w-[1920px] h-[1588px] top-[921px] px-[220px] py-[140px]">
        <div className="w-[1480px] h-[547px] flex items-center">
          <div className="w-[672px] h-[411px]">
            <h1
              className={`font-bold text-[72px] leading-[87.14px] tracking-[-0.02em] text-[#212529] ${inter.className}`}
            >
              Project Management
            </h1>
            <p
              className={`font-normal text-[18px] leading-[30px] tracking-[-0.02em] text-[#212529] mt-6 ${inter.className}`}
            >
              Images, videos, PDFs and audio files are supported. Create math
              expressions and diagrams directly from the app. Take photos with
              the mobile app and save them to a note.
            </p>
            <div className="w-[201px] h-[63px] rounded-md px-10 py-5 bg-[#4F9CF9] mt-12">
              <button
                className={`font-medium text-[18px] leading-[23px] tracking-[-0.02em] text-white flex items-center gap-2 ${inter.className}`}
              >
                Get Started
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
          <div className="w-[748px] h-[547px] bg-[#C4DEFD] ml-16"></div>
        </div>

        <div className="w-[1480px] h-[661px] flex flex-row items-center mt-[100px]">
          <div className="w-[710px] h-[661px] relative">
            <div className="w-[661px] h-[661px] border-dashed border-4 border-[#A7CEFC] rounded-full"></div>
            <div className="w-[70px] h-[70px] border-transparent bg-[#FFDC4D] absolute top-0 left-[20%] rounded-full"></div>
            <div className="w-[70px] h-[70px] border-transparent bg-[#FF5758] absolute top-[45%] -left-9 rounded-full"></div>
            <div className="w-[70px] h-[70px] border-transparent bg-[#37A3FF] absolute top-[580px] left-[137px] rounded-full"></div>
            <div className="w-[70px] h-[70px] border-transparent bg-[#15B392] absolute top-96 left-[610px] rounded-full"></div>
            <div className="w-[70px] h-[70px] border-transparent bg-[#37A3ff] absolute top-14 left-[520px] rounded-full"></div>

            <div className="w-[387px] h-[387px] border-dashed border-4 border-[#A7CEFC] absolute top-[20%] left-[20%] rounded-full"></div>
            <div className="w-[70px] h-[70px] border-transparent bg-[#37A3FF] absolute top-[45%] left-[15%] rounded-full"></div>
            <div className="w-[70px] h-[70px] border-transparent bg-[#15B392] absolute top-[15%] left-[42%] rounded-full"></div>
            <div className="w-[70px] h-[70px] border-transparent bg-[#FFBF60] absolute top-[73%] left-[42%] rounded-full"></div>
            <div className="w-[70px] h-[70px] border-transparent bg-[#37A3FF] absolute top-[45%] left-[69%] rounded-full"></div>

            <div className="w-[100px] h-[100px] shadow-2xl rounded-[10px] absolute top-[42%] left-[40%] flex justify-center items-center">
              <Image
                src={logo}
                alt="Shadow Logo"
                className="w-[57px] h-[44.01px]"
              />
            </div>
          </div>

          <div className="w-[670px] h-[294px] ml-24">
            <h1
              className={`font-bold text-[72px] leading-[87.14px] tracking-[-0.02em] text-[#212529] ${inter.className}`}
            >
              Work together
            </h1>
            <p
              className={`font-normal text-[18px] leading-[30px] tracking-[-0.02em] text-[#212529] mt-6 ${inter.className}`}
            >
              With whitepace, share your notes with your colleagues and
              collaborate on them. You can also publish a note to the internet
              and share the URL with others.
            </p>
            <div className="w-[186px] h-[63px] rounded-md px-10 py-5 bg-[#4F9CF9] mt-12">
              <button
                className={`font-medium text-[18px] leading-[23px] tracking-[-0.02em] text-white flex items-center gap-2 ${inter.className}`}
              >
                Try it now
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
      </div>
    </>
  );
};

export default Management;
