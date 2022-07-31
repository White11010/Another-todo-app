import React from 'react';

import styles from './TodoList.module.scss';
import {ITodo} from '../../../../models/todo.model';
import TodoItem from '../TodoItem/TodoItem';

interface ITodoListProps {
	todos: ITodo[];
	onStatusChange: (payload: ITodo) => void;
}

const TodoList: React.FC<ITodoListProps> = (props: ITodoListProps) => {
	return (
		<ul className={styles.todoList}>
			{
				props.todos.length ? props.todos.map(todo => (
					<li
						className={styles.todoList__item}
						key={todo.id}
					>
						<TodoItem todo={todo} onTodoChange={props.onStatusChange}/>
					</li>
				)) : <p>There are no tasks here!</p>
			}
		</ul>
	);
};

export default TodoList;