import { useState } from "react";
import { TaskType } from "../../libs/types";
import { NewTask } from "../NewTask";
import { Task } from "../Task";

import styles from "./styles.module.css";

export function TaskList() {
	const [taskList, setTaskList] = useState([
		{
			id: "1",
			title:
				"Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
			completed: false,
		},
		{
			id: "2",
			title: "Task 2",
			completed: true,
		},
		{
			id: "3",
			title: "Task 3",
			completed: true,
		},
	]);

	const quantityCompletedTasks = taskList.filter((t) => t.completed).length;

	function handleCheckTask(taskId: string) {
		setTaskList(
			taskList.map((task) => {
				if (task.id === taskId) {
					task.completed = !task.completed;
				}
				return task;
			})
		);
	}

	function handleDeleteTask(taskId: string) {
		setTaskList(taskList.filter((task) => task.id !== taskId));
	}

	function handleNewTask(task: TaskType) {
		setTaskList([...taskList, task]);
	}

	return (
		<>
			<NewTask onAddNewTask={handleNewTask} />
			<div className={styles.container}>
				<header className={styles.headerContainer}>
					<div className={styles.wrapperLeft}>
						<aside className={styles.concludedTasks}>Tarefas criadas</aside>
						<span className={`${styles.rounded} ${styles.numberCreatedTasks}`}>
							{taskList.length}
						</span>
					</div>
					<div className={styles.wrapperRight}>
						<aside>Concluídas</aside>
						<span
							className={` ${styles.rounded} ${styles.numberConcludedTasks}`}
						>
							{quantityCompletedTasks} de {taskList.length}
						</span>
					</div>
				</header>
				<ul className={styles.taskList}>
					{taskList.map((task) => {
						return (
							<>
								<Task
									key={task.id}
									task={task}
									onCheckTask={handleCheckTask}
									onDeleteTask={handleDeleteTask}
								/>
							</>
						);
					})}
				</ul>
			</div>
		</>
	);
}
