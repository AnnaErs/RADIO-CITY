export type Option = {
  label: string;
  value: string;
};
export type Options = Array<Option>;

export type DropdownListPropsType = {
  options: Options;
  onClick?: (option: Option) => void;
};