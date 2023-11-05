import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { PersonCircle } from "react-bootstrap-icons";
import { Button } from "../../components/Button/Button";
import styles from './Login.module.css'


export const Login = () => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [showLoader, setShowLoader] = useState(false);
    const redirect = useNavigate();
    
    useEffect(() => {
        checkSessionCookie();
    }, []);
    

    const setSessionCookie = (name, value) => {
        const now = new Date();
        const expires = new Date(now.getTime() + 24 * 7 * 3600000);
        document.cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=/`;
    }

    const checkSessionCookie = () => {
        const cookies = document.cookie.split(";").map((cookie) => cookie.trim());
        const sessionCookie = cookies.find((cookie) =>
            cookie.startsWith("session")
        );
        if (sessionCookie) {
            console.log("Hay una sesión activa.");
            redirect("/home");
        }
    }

    const handlerButton = async () => {
        if(user === '' || password === ''){
            alert('Todos los campos son obligatorios');
            return
        }

        const formData = {
            user: user,
            password: password,
        };

        try {
            setShowLoader(true);
            console.log(formData);
            // Realiza la petición POST al servidor utilizando axios
            const response = await axios.post(
                "http://localhost:5000/api/v1/signin",
                formData
            );

            // Realiza las acciones necesarias con la respuesta del servidor
            console.log(response.data);
            console.log(response.status);
            if(response.status == 200){
                sessionStorage.setItem('user', response.data.user)
                setSessionCookie('session', response.data.token)
                setShowLoader(false);
                redirect('/home')
            } //else if(response.status == )
        } catch (error) {
            // Manejo de errores
            setShowLoader(false);
            alert('El usuario o contraseña son incorrectos');
            console.error("Error al enviar el formulario:", error);
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            handlerButton();
        }
    };
    return (
        <main className={styles.background}>
            <section className={styles.loginContainer}>
                <header>
                    <PersonCircle size={80} color="white" />
                </header>
                <section className={styles.formContainer}>
                    <div
                        className={`${styles.labelInputContainer} ${styles.labelContainer}`}
                    >
                        <label className={styles.label} htmlFor="user">
                            USER:
                        </label>
                        <label className={styles.label} htmlFor="password">
                            PASSWORD:
                        </label>
                    </div>
                    <div
                        className={`${styles.labelInputContainer} ${styles.inputContainer}`}
                    >
                        <input
                            className={styles.input}
                            type="text"
                            name="user"
                            value={user}
                            onChange={(e) => setUser(e.target.value)}
                            onKeyDown={handleKeyPress}
                        />
                        <input
                            className={styles.input}
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onKeyDown={handleKeyPress}
                        />
                        <Button
                            text={"Iniciar"}
                            handlerButton={handlerButton}
                        />
                    </div>
                </section>
                {showLoader && <span className={styles.loader}></span>}
            </section>
        </main>
    );
};