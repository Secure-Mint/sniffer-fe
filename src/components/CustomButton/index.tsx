import * as React from "react";
import Button, { ButtonProps } from "@mui/joy/Button";

interface Props extends ButtonProps {
    label: string;
}

const CustomButton: React.FC<Props> = ({ label, loading, disabled, className, onClick }) => {
    return (
        <Button className={className} loading={loading} disabled={disabled} onClick={onClick}>
            {label}
        </Button>
    );
};

export default CustomButton;
