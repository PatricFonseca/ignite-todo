import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { PlusCircle } from "phosphor-react";
import { TaskType } from "../../libs/types";
import styles from "./styles.module.css";

interface NewTaskProps {
	onAddNewTask: (task: TaskType) => void;
}

export function NewTask({ onAddNewTask }: NewTaskProps) {
	const [taskDescription, setTaskDescription] = useState("");

	function handleNewTask() {
		const task: TaskType = {
			id: uuidv4(),
			title: taskDescription,
			completed: false,
		};
		onAddNewTask(task);
		setTaskDescription("");
	}

	return (
		<div className={styles.container}>
			<input
				className={styles.input}
				type="text"
				placeholder="Adicione uma nova tarefa"
				value={taskDescription}
				onChange={(e) => setTaskDescription(e.target.value)}
			/>
			<button className={styles.createButton} onClick={handleNewTask}>
				Criar
				<PlusCircle size={18} />
			</button>
		</div>
	);
}
