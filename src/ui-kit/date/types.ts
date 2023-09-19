export type DatePropsType = {
  name: string;
  min?: string;
  value?: string;
  required?: boolean;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (date: string) => void;
};
