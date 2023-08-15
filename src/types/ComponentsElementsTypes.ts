export type InputProps = {
  iconURL?: string;
  altIcon?: string;
  labelType?: string;
  placeholder?: string;
  name?: string;
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
