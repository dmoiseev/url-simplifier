import React, { FC } from 'react';

import styles from './Input.module.css';

const Input: FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => <input className={styles.input} {...props} />;

export default Input;
