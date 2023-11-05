import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PersonCircle } from "react-bootstrap-icons";
import { ButtonOption } from "../../components/ButtonOption/ButtonOption";
import { LogOut } from "../../components/LogOut/LogOut";
import styles from "./Home.module.css";

export const Home = () => {
    const redirect = useNavigate();

    useEffect(() => {
        checkSessionCookie();
    }, []);

    const checkSessionCookie = () => {
        const cookie = document.cookie
        console.log(cookie);
        if (cookie == '') {
            console.log("Inicia sesion.");
            redirect("/login");
        }
    };

    const handlerButton = () => {
        redirect("/home/ventas");
    };
    return (
        <>
            <header className={styles.backgroundHeader}>
                <section className={styles.logout}>
                    <LogOut/>
                </section>
                <section className={styles.userContainer}>
                    <h2 className={styles.username}>{sessionStorage.getItem('user')}</h2>
                    <PersonCircle size={80} className={styles.avatar} />
                </section>
            </header>
            <main className={styles.main}>
                <header className={styles.mainHeader}>
                    <h1>SELECCIONE UNA OPCIÓN</h1>
                </header>
                <section>
                    <ButtonOption
                        text={"CONSULTAR VENTAS"}
                        handlerButton={handlerButton}   
                    />
                </section>
            </main>
        </>
    );
};
