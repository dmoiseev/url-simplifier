import React, { FC } from 'react';

import styles from './Header.module.css';

const Header: FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => (
    <header className={styles.header} {...props}>
        {children}
    </header>
);

export default Header;
