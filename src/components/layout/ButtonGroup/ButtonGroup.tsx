import React from 'react';

import styles from './ButtonGroup.module.scss';

interface IButtonGroupProps {
	children: JSX.Element | JSX.Element[];
}

const ButtonGroup: React.FC<IButtonGroupProps> = (props: IButtonGroupProps) => {
	return (
		<div className={styles.buttonGroup}>
			{props.children}
		</div>
	);
};

export default ButtonGroup;