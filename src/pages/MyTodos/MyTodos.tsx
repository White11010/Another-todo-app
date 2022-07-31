import React, {useEffect, useState} from 'react';

import styles from './MyTodos.module.scss';
import TodoList from '../../components/core/Todo/TodoList/TodoList';
import {useLocalStorage} from '../../services/storage/local-storage';
import {ITodo} from '../../models/todo.model';
import Divider from '../../components/layout/Divider/Divider';
import Button from '../../components/ui/buttons/Button/Button';
import {useDefaultData} from '../../services/storage/default-data';

const defaultData: ITodo[] = [
	{
		id: 1,
		title: 'Learn React',
		description: 'Learn advanced features',
		isCompleted: false
	},
	{
		id: 2,
		title: 'Read Vue 3 docs',
		description: 'Read migration guide to compositon API',
		isCompleted: false,
	},
	{
		id: 3,
		title: 'Complete daily quests',
		description: 'Complete all quests in Valorant',
		isCompleted: false,
	}
];

const MyTodos = () => {

	const {setDefault} = useDefaultData<ITodo>('todos', defaultData);

	const {get, update} = useLocalStorage<ITodo>('todos');

	const [todos, setTodos] = useState<ITodo[]>([]);

	const setTodosFromStorage = () => {
		const todosFromStorage = get();
		if (todosFromStorage === null) {
			setTodos([]);
		} else {
			setTodos(todosFromStorage);
		}
	};

	const onStatusChange = (payload: ITodo): void => {
		update(payload);
		setTodosFromStorage();
	};

	useEffect(() => {
		setDefault();
		setTodosFromStorage();
	}, []);

	return (
		<div className={styles.myTodos}>
			<header className={styles.myTodosHeader}>
				<h1>My tasks</h1>
				<Button type="button" href="/new">Add new</Button>
			</header>

			<Divider />
			<h3 className={styles.myTodosHeading}>Active</h3>
			<TodoList onStatusChange={onStatusChange} todos={todos.filter(todo => !todo.isCompleted)}/>
			<h3 className={styles.myTodosHeading}>Completed</h3>
			<TodoList onStatusChange={onStatusChange} todos={todos.filter(todo => todo.isCompleted)}/>
		</div>
	);
};

export default MyTodos;