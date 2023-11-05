import styles from "./Button.module.css";

export const Button = ({ text, handlerButton }) => {
    return (
        <button className={styles.button} onClick={handlerButton}>
            {text}
        </button>
    );
};
