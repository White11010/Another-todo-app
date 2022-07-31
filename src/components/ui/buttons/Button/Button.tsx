import React from 'react';
import MUIButton from '@mui/material/Button';

import styles from './Button.module.scss';

interface IButtonProps {
	children: string;
	type?: 'submit' | 'reset' | 'button';
	href?: string
}

const Button: React.FC<IButtonProps> = (props: IButtonProps) => {
	return (
		<MUIButton
			className={styles.button}
			variant="contained"
			{...(props.href !== undefined ? {href: props.href} : {})}
			type={props.type === undefined ? 'button' : props.type}
		>
			{props.children}
		</MUIButton>
	);
};

export default Button;