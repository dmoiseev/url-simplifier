import React, { FC } from 'react';

const Form: FC<React.FormHTMLAttributes<HTMLFormElement>> = ({ children, ...props }) => (
    <form {...props}>{children}</form>
);

export default Form;
