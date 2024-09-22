import Link from './components/Link';
import Error from '../../../../common/components/Error';
import Form from './components/Form';
import { useShortUrl } from './hooks';
import Loader from '../../../../common/components/Loader';

import styles from './Simplifier.module.css';

const Simplifier = () => {
    const { short, error, loading, onSubmit } = useShortUrl();

    return (
        <div className={styles.simplifier}>
            <Form onSubmit={onSubmit} />
            {loading ? <Loader /> : null}
            {error ? <Error>{error}</Error> : null}
            {short ? <Link short={short} /> : null}
        </div>
    );
};

export default Simplifier;
