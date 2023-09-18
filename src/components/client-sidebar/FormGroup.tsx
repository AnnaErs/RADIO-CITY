import {PropsWithChildren, memo} from 'react';

type FormGroupPropsType = PropsWithChildren<{
  label: string;
}>;

const FormGroup = memo<FormGroupPropsType>(function FormGroup({label, children}) {
  return (
    <div className="flex flex-col gap-y-4">
      <p className="text-common-bold">{label}</p>
      {children}
    </div>
  );
});

export {FormGroup};
