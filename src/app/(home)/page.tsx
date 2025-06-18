"use client";

import SnifferResult from "@/components/SnifferResult";
import TokenValidator from "@/components/TokenValidator";
import { SnifferModel } from "@/types";
import { useState } from "react";

const Home = () => {
    const [sniffer, setSniffer] = useState<SnifferModel | undefined>(undefined);

    const onSearch = (data: SnifferModel) => {
        setSniffer(data);
    };

    return (
        <div className="home w-full h-full flex flex-col justify-start items-center gap-10">
            <TokenValidator onSearch={onSearch} />
            {sniffer && <SnifferResult sniffer={sniffer} />}
        </div>
    );
};

export default Home;
