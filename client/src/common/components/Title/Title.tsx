import React, { FC } from 'react';

import { TitleProps } from './Title.types';

import styles from './Title.module.css';

const Title: FC<TitleProps> = ({ children }) => <div className={styles.title}>{children}</div>;

export default Title;
