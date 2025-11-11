import ResultIcon from "@/components/SnifferResult/ResultIcon";
import { Alert } from "@mui/joy";

interface Props {
  danger: boolean;
  label: string;
  value: number | string;
}

const TokenResultBox: React.FC<Props> = ({ danger, label, value }) => {
  return (
    <Alert variant='soft' color={!danger ? "success" : "danger"} startDecorator={<ResultIcon danger={danger} />}>
      <p className='flex flex-row justify-start items-center'>
        {label}
        <span className='normal-case font-bold'> {value}</span>
      </p>
    </Alert>
  );
};

export default TokenResultBox;
