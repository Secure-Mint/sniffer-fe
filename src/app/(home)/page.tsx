"use client";

import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/Textfield";
import { SEARCH } from "@/utils/constants";
import { useState } from "react";

const Home = () => {
    const [address, setAddress] = useState("");

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    };

    const onSubmit = () => {
        console.log(address);
    };

    return (
        <div className="w-full h-full flex flex-col justify-center items-center">
            <div className="w-2xl flex flex-col justify-center items-center">
                <h3>Sniff token by address!</h3>
                <CustomInput value={address} onChange={handleAddressChange} />
                <CustomButton label={SEARCH} onClick={onSubmit} />
            </div>
        </div>
    );
};

export default Home;
