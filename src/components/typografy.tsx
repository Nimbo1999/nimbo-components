import { FC, HTMLProps } from 'react';

export const Text: FC<HTMLProps<HTMLSpanElement>> = ({ children, className, ...spanProps }) => {
    const classes = ['nimbo-text-container'];

    if (className) classes.push(className);

    return <span {...spanProps} className={ classes.join(' ') }>
        {children}
    </span>
}
