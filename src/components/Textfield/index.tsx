import * as React from "react";
import Input, { InputProps } from "@mui/joy/Input";

const CustomInput: React.FC<InputProps> = ({ placeholder, value, onChange, className }) => {
    return <Input placeholder={placeholder} value={value} onChange={onChange} className={className} />;
};

export default CustomInput;
