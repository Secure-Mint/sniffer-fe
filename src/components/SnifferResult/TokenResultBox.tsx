import ResultIcon from "@/components/SnifferResult/ResultIcon";
import { Alert } from "@mui/joy";

interface Props {
  danger: boolean;
  label: string;
  value: number | string;
}

const TokenResultBox: React.FC<Props> = ({ danger, label, value }) => {
  return (
    <Alert
      variant='outlined'
      color={!danger ? "success" : "danger"}
      startDecorator={<ResultIcon danger={danger} />}
      sx={{
        borderWidth: "2px"
      }}
    >
      <p className='flex flex-row justify-start items-center font-bold gap-1'>
        {label}
        <span className='font-bold uppercase'> {value}</span>
      </p>
    </Alert>
  );
};

export default TokenResultBox;
