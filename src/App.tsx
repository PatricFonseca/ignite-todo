import { Header } from "./components/Header/index";
import { NewTask } from "./components/NewTask";
import styles from "./App.module.css";
import "./global.css";
import { TaskList } from "./components/TaskList";
import { useState } from "react";

function App() {
	const [taskList, setTaskList] = useState([
		{
			id: 1,
			title:
				"Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
			completed: false,
		},
		{
			id: 2,
			title: "Task 2",
			completed: true,
		},
		{
			id: 3,
			title: "Task 3",
			completed: true,
		},
	]);

	return (
		<>
			<Header />
			<div className={styles.container}>
				<NewTask />
				<TaskList />
			</div>
		</>
	);
}

export default App;
