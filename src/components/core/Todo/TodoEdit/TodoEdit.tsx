import React from 'react';
//TODO разобраться с алиасами
import {ITodo} from '../../../../models/todo.model';
import TextField from '../../../ui/inputs/TextField/TextField';
import SubmitButton from '../../../ui/buttons/SubmitButton/SubmitButton';
import {useForm} from '../../../../shared/composables/form.composable';
import ButtonGroup from '../../../layout/ButtonGroup/ButtonGroup';
import TextareaField from '../../../ui/inputs/TextareaField/TextareaField';

const TodoEdit = () => {
	const initialState: ITodo = {
		title: '',
		description: '',
	};

	const submitHandler = (domainObject: ITodo) => {
		console.log(domainObject);
	};
	
	const {domainObject, onChange, onSubmit} = useForm<ITodo>(initialState, submitHandler);

	return (
		<form
			className="form"
			onSubmit={onSubmit}
		>
			<TextField 
				name="title" 
				value={domainObject.title}
				label="Title" 
				autoFocus={true}
				onChange={onChange}
			/>
			<TextareaField
				name="description"
				value={domainObject.description}
				label="Description"
				onChange={onChange}
			/>
			<ButtonGroup>
				<SubmitButton>
					Submit
				</SubmitButton>
			</ButtonGroup>
		</form>
	);
};

export default TodoEdit;