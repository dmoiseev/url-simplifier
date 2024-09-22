import React from 'react';

import Input from '../../../../../../common/components/Input';
import Button from '../../../../../../common/components/Button';
import BaseForm from '../../../../../../common/components/Form';

import { FormProps } from './Form.types';

import styles from './Form.module.css';

const Form: React.FC<FormProps> = ({ onSubmit }) => (
    <BaseForm className={styles.form} onSubmit={onSubmit}>
        <Input name="url" id="url" />
        <Button>Submit</Button>
    </BaseForm>
);

export default Form;
