import React, {ChangeEvent} from 'react';
import MUITextField from '@mui/material/TextField';

interface ITextInputProps {
	name: string;
	value: string;
	label: string;
	autoFocus: boolean;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const TextField: React.FC<ITextInputProps> = (props) => {
	return (
		<MUITextField
			name={props.name}
			value={props.value}
			label={props.label}
			variant="outlined"
			autoFocus={props.autoFocus === undefined ? false : props.autoFocus} //TODO Разобраться с дефолтными значениями пропсов
			onChange={props.onChange}
		/>
	);
};

export default TextField;