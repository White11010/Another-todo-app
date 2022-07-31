import React from 'react';
import {Route, Routes} from 'react-router-dom';

import styles from './App.module.scss';
import NewTodo from './pages/NewTodo/NewTodo';
import MyTodos from './pages/MyTodos/MyTodos';

function App() {
	return (
		<div className={styles.App}>
			<div className={styles.wrapper}>
				<Routes>
					<Route path="new" element={<NewTodo />} />
					<Route path="todos" element={<MyTodos />} />
					<Route path="*" element={<MyTodos />} />
				</Routes>
			</div>
		</div>
	);
}


export default App;
