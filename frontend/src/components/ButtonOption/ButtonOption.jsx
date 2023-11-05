import styles from "./ButtonOption.module.css";

export const ButtonOption = ({ text, handlerButton }) => {
    return (
        <button className={styles.button} onClick={handlerButton}>
            {text}
        </button>
    );
};
