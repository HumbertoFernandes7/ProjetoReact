import React from "react";
import Botao from "../Botao";
import style from './Formulario.module.scss';

class Formulario extends React.Component {
    state = {
        tarefa: "",
        tempo: "00:00"
    }

    adicionaTarefa(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
    }

    render() {
        return (
          <form className={style.novaTarefa} onSubmit={this.adicionaTarefa.bind(this)} >
            <div className={style.inputContainer}>
                <label htmlFor="tarefa">
                    Adicione algo!
                </label>
                <input 
                    type="text" name="tarefa"
                    value={this.state.tarefa}
                    onChange={evento => this.setState({...this.state, tarefa: evento.target.value})}
                    id="tarefa" placeholder="O que deseja cronometrar" required />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="tempo">
                    Tempo
                </label>
                <input 
                    type="time" step="1" name="tempo" 
                    value={this.state.tempo} 
                    onChange={evento => this.setState({...this.state, tempo: evento.target.value})}
                    id="tempo" min="00:00:00" max="01:30:00" required />
            </div>
                <Botao type="submit"
                    children="Adicionar"
                ></Botao>
          </form>
        )
    }
}

export default Formulario;