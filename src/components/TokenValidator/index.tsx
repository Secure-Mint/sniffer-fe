"use client";

import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/Textfield";
import ApiClient from "@/services/api";
import { SnifferModel } from "@/types";
import { ENTER, ENTER_KEY_CODE, SEARCH, TOKEN_SEARCH_PLACEHOLDER, TOKEN_SEARCH_SLOGAN } from "@/utils/constants";
import React, { useState } from "react";

interface Props {
    onSearch: (data: SnifferModel) => void;
}

const TokenSearch: React.FC<Props> = ({ onSearch }) => {
    const [address, setAddress] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAddress(e.target.value);
        if (e.target.value && error) setError("");
    };

    const handleKeyDownSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === ENTER || e.keyCode === ENTER_KEY_CODE) {
            onSubmit();
        }
    };

    const onSubmit = () => {
        if (!address) {
            setError("Address cannot be empty...");
            return;
        }
        setLoading(true);
        ApiClient.sniffToken({ address })
            .then((resp) => {
                onSearch(resp);
            })
            .catch((err) => {
                setError(err.message);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <div className="w-3xl flex flex-col justify-center items-center gap-5">
            <h3 className="text-2xl">{TOKEN_SEARCH_SLOGAN}</h3>
            <div className="w-full flex flex-row justify-between items-center gap-5">
                <div className="w-5/6 h-12">
                    <CustomInput
                        value={address}
                        onChange={handleAddressChange}
                        onKeyDown={handleKeyDownSubmit}
                        placeholder={TOKEN_SEARCH_PLACEHOLDER}
                        className="w-full h-full"
                        color={error ? "danger" : "neutral"}
                    />
                    {error && <span className="text-sm text-red-600 pl-1">{error}</span>}
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
