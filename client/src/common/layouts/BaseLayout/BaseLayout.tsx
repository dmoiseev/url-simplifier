import React, { FC } from 'react';

import Header from '../../components/Header';
import Title from '../../components/Title';

import styles from './BaseLayout.module.css';

const BaseLayout: FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <div>
            <Header>
                <Title>url simplifier</Title>
            </Header>
            <main className={styles.main}>{children}</main>
        </div>
    );
};

export default BaseLayout;
