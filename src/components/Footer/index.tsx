"use client";

import Image from "next/image";
import React from "react";
import LogoBlack from "@/assets/images/snifra-black.png";
import { SNIFFER_DISCLAIMER } from "@/utils";

const Footer = () => {
  return (
    <div className='footer w-full h-full flex flex-row justify-between items-center pr-10'>
      <Image width={250} src={LogoBlack} alt='Snifra-Logo' priority />
      <p className='w-5/6 text-sm'>
        <span className='font-bold'>Disclaimer: </span>
        <span>{SNIFFER_DISCLAIMER}</span>
      </p>
    </div>
  );
};

export default Footer;
