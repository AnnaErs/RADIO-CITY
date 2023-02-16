import {MakeClassesType} from './types';

export const makeClasses: MakeClassesType = (values, genClass) => {
    if (typeof values === 'object') {
        return Object.entries(values).map(([key, value]) => {
            const prefix = key === 'phone' ? '' : `${key}:`
            return `${prefix}${genClass(value)}`
        }).join(' ')
    }
    return genClass(values);
};
