import MUICheckbox from '@mui/material/Checkbox';
import React, {ChangeEvent} from 'react';

interface ICheckboxProps {
	checked: boolean;
	id: string;
	disabled: boolean;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<ICheckboxProps> = (props: ICheckboxProps) => {
	return (
		<MUICheckbox
			id={props.id}
			disabled={props.disabled}
			checked={props.checked}
			onChange={props.onChange}
		/>
	);
};

export default Checkbox;