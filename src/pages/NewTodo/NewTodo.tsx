import React from 'react';

import styles from './NewTodo.module.scss';
import TodoEdit from '../../components/core/Todo/TodoEdit/TodoEdit';
import Button from '../../components/ui/buttons/Button/Button';

const NewTodo = () => {
	return (
		<div>
			<nav className={styles.newTodoNav}>
				<Button type="button" href="/todos">My todos</Button>
			</nav>
			<TodoEdit/>
		</div>
	);
};

export default NewTodo;