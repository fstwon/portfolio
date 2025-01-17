
type TInOutput = string;

interface IProps {
  string: TInOutput;
}


export function toLowerCase({string}: IProps):TInOutput {
  return string.toLowerCase();
}