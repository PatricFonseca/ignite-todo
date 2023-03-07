import { Check, Circle, Trash } from "phosphor-react";
import { TaskType } from "../../libs/types";
import styles from "./styles.module.css";

interface TaskProps {
	task: TaskType;
	onCheckTask: (taskId: string) => void;
	onDeleteTask: (taskId: string) => void;
}

export function Task({ task, onCheckTask, onDeleteTask }: TaskProps) {
	function handleTaskComplete() {
		onCheckTask(task.id);
	}

	function handleTaskDelete() {
		onDeleteTask(task.id);
	}

	return (
		<li
			key={task.id}
			className={`${styles.task} ${
				task.completed ? "" : styles.taskUncompleted
			}`}
		>
			<div
				style={{
					display: "flex",
					alignItems: "flex-start",
					gap: "12px",
				}}
			>
				<button className={styles.buttonCheck} onClick={handleTaskComplete}>
					<span
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<div
							className={`${
								task.completed
									? styles.borderCircleChecked
									: styles.borderCircleUnchecked
							}`}
						>
							<span
								className={`${
									task.completed ? styles.checked : styles.unchecked
								}`}
							>
								{task.completed && (
									<Check
										color="#fff"
										fill="#fff"
										weight="bold"
										className="check"
									/>
								)}
							</span>
						</div>
					</span>
				</button>
				<p className={`${task.completed && styles.textCompleted}`}>
					{task.title}
				</p>
			</div>
			<button className={styles.deleteButton} onClick={handleTaskDelete}>
				<Trash size={24} />
			</button>
		</li>
	);
}
