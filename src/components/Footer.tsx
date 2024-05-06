import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full flex justify-between px-[10px] mt-[96px] mb-[80px]">
      <div className="w-full max-w-[162px]">
        
      </div>

      <div className="w-full max-w-[162px]">
        <h1 className="text-[18px] font-light">Pages</h1>
        <ul className="mt-[32px]">
          <li className="mb-[16px] text-[16px] text-white text-opacity-50 cursor-pointer">
            <Link href="/menu">Menu</Link>
          </li>
         
          <li className="mb-[16px] text-[16px] text-white text-opacity-50 cursor-pointer">
            <Link href="/contact">Contact</Link>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default Footer;
