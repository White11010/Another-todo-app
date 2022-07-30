import React, {SyntheticEvent} from 'react';
import {Button} from '@mui/material';

import styles from './SubmitButton.module.scss';

interface IButtonProps {
	children: string
}

const SubmitButton: React.FC<IButtonProps> = (props: IButtonProps) => {
	return (
		<Button
			className={styles.button}
			variant="contained"
			type="submit"
		>
			{props.children}
		</Button>
	);
};

export default SubmitButton;