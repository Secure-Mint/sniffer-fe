"use client";

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

            {sniffer && (
                <div className="w-3xl">
                    <p>Name: {sniffer?.name || ""}</p>
                    <p>Symbol: {sniffer?.symbol || ""}</p>
                    <p>Address: {sniffer?.address || ""}</p>
                    <p>Impersonated: {sniffer?.impersonated ? "true" : "false"}</p>
                    <p>Mint Authority: {sniffer?.mintAuthority ? "true" : "false"}</p>
                    <p>Freeze Authority: {sniffer?.freezeAuthority ? "true" : "false"}</p>
                    <p>Tags: {(sniffer?.tags || []).map((x) => `${x},`)}</p>
                </div>
            )}
        </div>
    );
};

export default Home;
