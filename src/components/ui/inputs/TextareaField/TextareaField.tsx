import React, {ChangeEvent} from 'react';
import TextField from '@mui/material/TextField';

interface ITextareaField {
	name: string;
	value: string;
	label: string;
	rows?: number
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const TextareaField: React.FC<ITextareaField> = (props: ITextareaField) => {
	return (
		<TextField
			name={props.name}
			label={props.label}
			value={props.value}
			placeholder=""
			multiline
			rows={props.rows === undefined ? 4 : props.rows}
			onChange={props.onChange}
		/>
	);
};

export default TextareaField;