import styles from "./Spinner.module.css";

const Spinner = () => {
	return (
		<div className={styles['sk-chase']}>
			<div className={styles['sk-chase-dot']}></div>
      <div className={styles['sk-chase-dot']}></div>
      <div className={styles['sk-chase-dot']}></div>
      <div className={styles['sk-chase-dot']}></div>
      <div className={styles['sk-chase-dot']}></div>
      <div className={styles['sk-chase-dot']}></div>
		</div>
	);
};

export default Spinner;