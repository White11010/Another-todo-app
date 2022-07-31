import React, {ChangeEvent} from 'react';

import styles from './TodoItem.module.scss';
import {ITodo} from '../../../../models/todo.model';
import Checkbox from '../../../ui/inputs/Checkbox/Checkbox';

interface ITodoItemProps {
	todo: ITodo,
	onTodoChange: (paylaod: ITodo) => void;
}

const TodoItem: React.FC<ITodoItemProps> = (props: ITodoItemProps) => {
	const {id, title, description, isCompleted} = props.todo;

	const onCheckboxClick = (e: ChangeEvent<HTMLInputElement>) => {
		const updatedTodo = Object.assign(props.todo, {isCompleted: e.target.checked});
		props.onTodoChange(updatedTodo);
	};

	return (
		<div className={`${styles.todoItem} ${isCompleted && styles.todoItemCompleted}`}>
			<h4 className={styles.todoItemTitle}>{title}</h4>
			<p className={styles.todoItemDescription}>{description}</p>
			<div className={styles.todoItemCheckbox}>
				<Checkbox
					id={id?.toString() || ''}
					disabled={isCompleted}
					checked={isCompleted}
					onChange={onCheckboxClick}
				/>
			</div>
		</div>
	);
};

export default TodoItem;