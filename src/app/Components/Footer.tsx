// import react from "react";
import Image from "next/image";
import logo from "@/app/Assests/Logo.png";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const Footer = () => {
  return (
    <>
      <div className="pt-[125px] pb-8 px-[220px] w-[1920px] h-[461px] top-[5195px] bg-[#043873] ">
        <div className="w-[1480px] h-[260px] flex justify-between items-center gap-4">
          <div className="w-[295px] h-[169px] ">
            <div className="w-[191px] h-[34px]">
              <Image src={logo} alt="Company Logo" />
            </div>
            <p
              className={`font-normal text-[18px] leading-[30px] tracking-[-0.02em] text-[#F7F7EE] pt-4 ${inter.className}`}
            >
              whitepace was created for <br /> the new ways we live and <br />{" "}
              work. We make a better <br /> workspace around the world
            </p>
          </div>

          <div className="w-[295px] h-[130px] flex flex-col justify-between">
            <p
              className={`font-bold text-[18px] leading-[21.78px] tracking-[-0.02em] text-white ${inter.className}`}
            >
              Product
            </p>
            <p
              className={`font-normal text-[16px] leading-[20px] tracking-[-0.02em] text-[#FFE492] ${inter.className}`}
            >
              Overview
            </p>
            <p
              className={`font-normal text-[16px] leading-[20px] tracking-[-0.02em] text-white ${inter.className}`}
            >
              Pricing
            </p>
            <p
              className={`font-normal text-[16px] leading-[20px] tracking-[-0.02em] text-white ${inter.className}`}
            >
              Customer stories
            </p>
          </div>

          <div className="w-[295px] h-[130px] flex flex-col justify-between">
            <p
              className={`font-bold text-[18px] leading-[21.78px] tracking-[-0.02em] text-white ${inter.className}`}
            >
              Resources
            </p>
            <p
              className={`font-normal text-[16px] leading-[20px] tracking-[-0.02em] text-white ${inter.className}`}
            >
              BLog
            </p>
            <p
              className={`font-normal text-[16px] leading-[20px] tracking-[-0.02em] text-white ${inter.className}`}
            >
              Guides & tutorials
            </p>
            <p
              className={`font-normal text-[16px] leading-[20px] tracking-[-0.02em] text-white ${inter.className}`}
            >
              Help center
            </p>
          </div>

          <div className="w-[295px] h-[130px] flex flex-col justify-between">
            <p
              className={`font-bold text-[18px] leading-[21.78px] tracking-[-0.02em] text-white ${inter.className}`}
            >
              Company
            </p>
            <p
              className={`font-normal text-[16px] leading-[20px] tracking-[-0.02em] text-white ${inter.className}`}
            >
              About us
            </p>
            <p
              className={`font-normal text-[16px] leading-[20px] tracking-[-0.02em] text-white ${inter.className}`}
            >
              Careers
            </p>
            <p
              className={`font-normal text-[16px] leading-[20px] tracking-[-0.02em] text-white ${inter.className}`}
            >
              Media kit
            </p>
          </div>
        </div>
        <div className="border-b border-solid border-[#2E4E73] w-[1480px] items-center"></div>
        <div className="w-[1480px] h-[20] text-center ">
          <p
            className={`font-normal text-[16px] leading-[20px] pt-6 tracking-[-0.02em] text-white ${inter.className}`}
          >
            ©2021 Whitepace LLC.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;