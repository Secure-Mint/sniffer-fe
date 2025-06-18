"use client";

import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/Textfield";
import { SEARCH, TOKEN_SEARCH_PLACEHOLDER, TOKEN_SEARCH_SLOGAN } from "@/utils/constants";
import React, { useState } from "react";

const TokenSearch = () => {
    const [address, setAddress] = useState("");
    const [loading, setLoading] = useState(false);

    const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAddress(e.target.value);
    };

    const onSubmit = () => {
        setLoading(true);
        console.log(address);
    };

    return (
        <div className="w-full h-full flex flex-col justify-start items-center">
            <div className="w-3xl flex flex-col justify-center items-center gap-5">
                <h3 className="text-2xl">{TOKEN_SEARCH_SLOGAN}</h3>
                <div className="w-full flex flex-row justify-center items-center gap-5">
                    <CustomInput
                        value={address}
                        onChange={handleAddressChange}
                        placeholder={TOKEN_SEARCH_PLACEHOLDER}
                        className="w-3/4 h-12"
                    />
                    <CustomButton
                        label={SEARCH}
                        onClick={onSubmit}
                        size="lg"
                        className="w-24 h-12 capitalize text-2xl"
                        loading={loading}
                    />
                </div>
            </div>
        </div>
    );
};

export default TokenSearch;
