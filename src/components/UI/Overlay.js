import styles from "./Overlay.module.css";
import { createPortal } from "react-dom";
import { Fragment } from "react";

const overlayElement = document.getElementById("overlay");

const Backdrop = (props) => {
	return (
		<div
			className={`${styles.backdrop} ${props.backdrop.className}`}
			onClick={props.onBackdropClick}
		/>
	);
};

const Content = (props) => {
	return (
		<div className={styles["overlay-content"]}>
			<Backdrop
				backdrop={props.backdrop}
				onBackdropClick={props.onBackdropClick}
			/>
			<div className={styles["overlay-actual-content"]}>{props.children}</div>
		</div>
	);
};

const Overlay = (props) => {
	return (
		<Fragment>
			{createPortal(
				<Content
					onBackdropClick={props.onBackdropClick}
					backdrop={props.backdrop}
				>
					{props.children}
				</Content>,
				overlayElement
			)}
		</Fragment>
	);
};

export default Overlay;
