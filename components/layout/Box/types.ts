import {FC, PropsWithChildren} from 'react';

type Multipliers = 1 | 2 | 3 | 4 | 5 | 6;
type Responsive<T> = {
    phone?: T;
    tablet?: T;
    desktop?: T;
}
type BoxPropsType = {
    gap?: Multipliers | Responsive<Multipliers>;
    className?: string;
    wrap?: boolean;
};
export type BoxType = FC<PropsWithChildren<BoxPropsType>>;

type GenClassType<T> = (value: T) => string
export type MakeClassesType = (values: Multipliers | Responsive<Multipliers>, genClass: GenClassType<Multipliers>) => string
