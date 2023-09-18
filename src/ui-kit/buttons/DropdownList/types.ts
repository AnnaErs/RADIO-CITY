export type Option = {
  label: string;
  value: string;
};
export type Options = Array<Option>;

export type DropdownListPropsType = {
  options: Options;
  optionColor?: (option: string) => string;
  onClick?: (option: Option) => void;
};
