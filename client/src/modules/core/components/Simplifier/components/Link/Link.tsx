import { FC } from 'react';

import Button from '../../../../../../common/components/Button';
import { LinkProps } from './Link.types';
import { useLinkCopy } from '../../hooks';

import styles from './Link.module.css';

const Link: FC<LinkProps> = ({ short }) => {
    const { clicked, url, onClick } = useLinkCopy(short);

    return (
        <div className={styles.link}>
            <div>Your link:</div>
            <a href={url} target="_blank" rel="noreferrer">
                {short}
            </a>
            <Button onClick={onClick}>{clicked ? 'Copied' : 'Copy'}</Button>
        </div>
    );
}

export default Link;
