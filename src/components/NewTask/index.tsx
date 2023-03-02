import { PlusCircle } from "phosphor-react";
import styles from "./styles.module.css";

export function NewTask() {
	return (
		<div className={styles.container}>
			<input
				className={styles.input}
				type="text"
				placeholder="Adicione uma nova tarefa"
			/>
			<button className={styles.createButton}>
				Criar
				<PlusCircle size={18} />
			</button>
		</div>
	);
}
