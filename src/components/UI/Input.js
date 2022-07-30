import styles from "./Input.module.css";

const Input = (props) => {
	return (
		<div>
			{props.label && <label htmlFor={props.input.id}>{props.label}</label>}
			<input
				{...props.input}
				className={`${styles.input} ${props.input.className}`}
			/>
		</div>
	);
};

export default Input;
