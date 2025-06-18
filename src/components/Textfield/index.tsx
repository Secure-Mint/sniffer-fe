import * as React from "react";
import Input, { InputProps } from "@mui/joy/Input";

const CustomInput: React.FC<InputProps> = (props) => {
    return <Input {...props} />;
};

export default CustomInput;
