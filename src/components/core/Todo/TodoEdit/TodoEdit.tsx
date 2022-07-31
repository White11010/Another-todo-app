import React from 'react';
//TODO разобраться с алиасами
import {ITodo} from '../../../../models/todo.model';
import TextField from '../../../ui/inputs/TextField/TextField';
import Button from '../../../ui/buttons/Button/Button';
import {useForm} from '../../../../shared/composables/form.composable';
import ButtonGroup from '../../../layout/ButtonGroup/ButtonGroup';
import TextareaField from '../../../ui/inputs/Textarea/Textarea';
import {useLocalStorage} from '../../../../services/storage/local-storage';
import {useNavigate} from 'react-router-dom';

const TodoEdit = () => {
	const initialState: ITodo = {
		title: '',
		description: '',
		isCompleted: false,
	};

	const navigate = useNavigate();
	const {add} = useLocalStorage<ITodo>('todos');

	const submitHandler = (domainObject: ITodo) => {
		add(domainObject);
		navigate('/todos');
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
				<Button type="submit">
					Submit
				</Button>
			</ButtonGroup>
		</form>
	);
};

export default TodoEdit;