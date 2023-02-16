import React, { memo, useMemo } from 'react';

import {BoxType} from './types';
import {makeClasses} from './utils';

const DEFAULT_CLASSES = "flex";

const Box: BoxType = ({gap, className, wrap, children}) => {
    const classNames = useMemo(() => {
        const classes = [DEFAULT_CLASSES];

        if (wrap) {
            classes.push('flex-wrap')
        }
        if (gap) {
            classes.push(makeClasses(gap, value => `-m-${value}`));
            classes.push(makeClasses(gap, value => `children:p-${value}`));
        }
        if (className) {
            classes.push(className)
        }

        return classes.join(' ');
    }, [gap])

    return (
        <div className={classNames}>
            {children}
        </div>
    );
};

export default memo(Box)