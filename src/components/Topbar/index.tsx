"use client";

import Image from "next/image";
import React from "react";
import LogoBlack from "@/assets/images/snifra-black.png";

const Topbar = () => {
  return (
    <div className='topbar w-full h-full flex flex-row justify-start items-center'>
      <Image width={300} src={LogoBlack} alt='Snifra-Logo' priority />
    </div>
  );
};

export default Topbar;
