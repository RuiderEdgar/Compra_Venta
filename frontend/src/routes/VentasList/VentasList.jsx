import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { PersonCircle, ArrowLeftCircleFill } from "react-bootstrap-icons";
import styles from "./VentasList.module.css";

export const VentasList = () => {
    const redirect = useNavigate();
    const [ventas, setVentas] = useState([]);

    const checkSessionCookie = () => {
        const cookie = document.cookie;
        console.log(cookie);
        if (cookie == "") {
            console.log("Inicia sesion.");
            redirect("/login");
        }
    };

    useEffect(() => {
        checkSessionCookie();
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:5000/api/v1/ventas"
                );
                setVentas(response.data);
                console.log(response.data);
            } catch (error) {
                console.error("Error al obtener los ventas:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <header className={styles.backgroundHeader}>
                <nav>
                    <a href="/home" className={styles.nav}>
                        <ArrowLeftCircleFill size={30} color={"white"} />
                    </a>
                </nav>
                <div className={styles.userContainer}>
                    <h2 className={styles.username}>{sessionStorage.getItem('user')}</h2>
                    <PersonCircle size={80} className={styles.avatar} />
                </div>
            </header>
            <main className={styles.container}>
                <h1>Lista de Distribuidores</h1>
                <ul className={styles.list}>
                    {ventas.map((venta) => (
                        <li
                            key={venta.NumV}
                            className={styles.item}
                        >
                            <div>
                                <strong>RFC del cliente:</strong>{" "}
                                {venta.Clientes_RFC}
                            </div>
                            <div>
                                <strong>Fecha:</strong>{" "}
                                {venta.Fecha}
                            </div>
                            <div>
                                <strong>Hora:</strong>{" "}
                                {venta.Hora}
                            </div>
                            <div>
                                <strong>Subtotal:</strong>{" "}
                                {venta.Subtotal}
                            </div>
                            <div>
                                <strong>IVA:</strong>{" "}
                                {venta.IVA}
                            </div>
                            <div>
                                <strong>Total:</strong>{" "}
                                {venta.Total}
                            </div>
                            <div>
                                <strong>Numero SS del Personal:</strong>{" "}
                                {venta.Personal_NumSS}
                            </div>
                        </li>
                    ))}
                </ul>
            </main>
        </>
    );
};
