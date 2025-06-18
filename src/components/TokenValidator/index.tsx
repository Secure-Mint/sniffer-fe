"use client";

import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/Textfield";
import ApiClient from "@/services/api";
import { SnifferModel } from "@/types";
import { SEARCH, TOKEN_SEARCH_PLACEHOLDER, TOKEN_SEARCH_SLOGAN } from "@/utils/constants";
import React, { useState } from "react";

interface Props {
    onSearch: (data: SnifferModel) => void;
}

const TokenSearch: React.FC<Props> = ({ onSearch }) => {
    const [address, setAddress] = useState("");
    const [loading, setLoading] = useState(false);
    const [addressError, setAddressError] = useState(false);

    const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (address && addressError) setAddressError(false);
        setAddress(e.target.value);
    };

    const onSubmit = () => {
        if (!address) {
            setAddressError(true);
            return;
        }
        setLoading(true);
        setTimeout(() => {
            ApiClient.sniffToken({ address })
                .then((resp) => {
                    console.log(resp);
                    onSearch(resp);
                })
                .catch((err) => {
                    console.log(err);
                })
                .finally(() => {
                    setLoading(false);
                });
        }, 1000);
    };

    return (
        <div className="w-3xl flex flex-col justify-center items-center gap-5">
            <h3 className="text-2xl">{TOKEN_SEARCH_SLOGAN}</h3>
            <div className="w-full flex flex-row justify-between items-center gap-5">
                <div className="w-5/6 h-12">
                    <CustomInput
                        value={address}
                        onChange={handleAddressChange}
                        placeholder={TOKEN_SEARCH_PLACEHOLDER}
                        className="w-full h-full"
                        color={addressError ? "danger" : "neutral"}
                    />
                    {addressError && <span className="text-sm text-red-600 pl-1">Address cannot be empty...</span>}
                </div>
                <CustomButton
                    label={SEARCH}
                    onClick={onSubmit}
                    size="lg"
                    className="w-28 h-12 capitalize text-2xl"
                    loading={loading}
                />
            </div>
        </div>
    );
};

export default TokenSearch;
