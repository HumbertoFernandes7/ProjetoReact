import Botao from "../Botao";
import Relogio from "./Relogio";
import style from './Cronometro.module.scss';

export function Cronometro() {
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Relogio></Relogio>
            </div>
                <Botao>
                    Começar!
                </Botao>
        </div>
    )
}