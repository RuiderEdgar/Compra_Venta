import axios from 'axios'
import s from './LogOut.module.css'
import { useNavigate } from 'react-router-dom';

export const LogOut = () => {
    const redirect = useNavigate();
    const handlerButton = () => {
        redirect("/login");
    };

    const fetchLogout = async () => {
        try {
            const response = await axios.get(
                "http://localhost:5000/api/v1/signout"
            );
            console.log(response.data);
            document.cookie = 'session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
            sessionStorage.clear();
            handlerButton();
        } catch (error) {
            console.error("Error al cerrar sesion:", error);
        }
    };

  return (
    <button className={s.button} onClick={fetchLogout}>
        Log out
    </button>
  )
}
