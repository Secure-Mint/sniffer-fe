"use client";

import Loader from "@/components/Loader";
import SnifferResult from "@/components/SnifferResult";
import TokenValidator from "@/components/TokenValidator";
import { SnifferModel } from "@/types";
import { TOKEN_SEARCH_SLOGAN, TOKEN_SEARCH_SUBSLOGAN } from "@/utils";
import { useState } from "react";

const Home = () => {
  const [sniffer, setSniffer] = useState<SnifferModel | null>(null);
  const [loading, setLoading] = useState(true);

  const onSearch = (data: SnifferModel | null) => {
    setSniffer(data);
  };

  return (
    <div className='home w-full h-full flex flex-col justify-start items-center gap-5'>
      <div>
        <h2 className='w-3xl text-2xl text-center'>{TOKEN_SEARCH_SLOGAN}</h2>
        <h4 className='w-3xl text-center'>{TOKEN_SEARCH_SUBSLOGAN}</h4>
      </div>
      <TokenValidator onSearch={onSearch} loading={loading} onLoading={(value) => setLoading(value)} />
      {loading && (
        <div className='w-full h-96 flex flex-row justify-center items-center'>
          <Loader />
        </div>
      )}
      {!loading && sniffer && <SnifferResult sniffer={sniffer} />}
    </div>
  );
};

export default Home;
