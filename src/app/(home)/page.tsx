"use client";

import SnifferResult from "@/components/SnifferResult";
import TokenValidator from "@/components/TokenValidator";
import { SnifferModel } from "@/types";
import { SNIFFER_DISCLAIMER, TOKEN_SEARCH_SLOGAN } from "@/utils";
import { useState } from "react";

const Home = () => {
  const [sniffer, setSniffer] = useState<SnifferModel | null>(null);
  const [loading, setLoading] = useState(false);

  const onSearch = (data: SnifferModel | null) => {
    setSniffer(data);
  };

  return (
    <div className='home w-full h-full flex flex-col justify-start items-center gap-7'>
      <h3 className='w-3xl text-3xl text-left'>{TOKEN_SEARCH_SLOGAN}</h3>
      <TokenValidator onSearch={onSearch} />
      <p className='w-3xl text-sm'>{SNIFFER_DISCLAIMER}</p>
      {sniffer && <SnifferResult sniffer={sniffer} />}
    </div>
  );
};

export default Home;
