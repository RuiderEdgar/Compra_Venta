import {Button} from '../../components/Button/Button';
import s from './Inicio.module.css'

export const Inicio = () => {
    const handlerButton = () => {
		window.location.href = '/login'
	};
  return (
    <>
        <body className={s.body}>
            <h1 className={s.title}>Bienvenido</h1>
            <Button text={'Iniciar Sesion'} handlerButton={handlerButton}/>
        </body>
    </>
  )
}
