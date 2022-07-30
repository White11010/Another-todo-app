import React from 'react';

import styles from './App.module.scss';
import Todos from './pages/Todos';

function App() {
	return (
		<div className={styles.App}>
			<div className={styles.wrapper}>
				<Todos />
			</div>
		</div>
	);
}


export default App;
