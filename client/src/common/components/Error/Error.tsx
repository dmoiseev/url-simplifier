import { FC, PropsWithChildren } from 'react';

import styles from './Error.module.css';

const Error: FC<PropsWithChildren> = ({ children }) => <div className={styles.error}>{children}</div>;

export default Error;
