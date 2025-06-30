import { useState } from "react";
import Button from "../Button";

//import { algumaCoisa } from "../Lista"
//import {Lista} from "../Lista"

export type Tarefa = {
  tarefa: string;
  tempo: string;
};

interface FormularioProps {
  valoresSalvos: Tarefa[];
  setValoresSalvos: React.Dispatch<React.SetStateAction<Tarefa[]>>;
  //setValoresSalvos((prev) => [...prev, novaTarefa]); setStateAction poderia ser dessa forma tambem
}

function Formulario({ valoresSalvos, setValoresSalvos }: FormularioProps) {
  const [tarefa, setTarefa] = useState('');
  const [tempo, setTempo] = useState('');

  const aoSalvar = () => {
    const novaTarefa: Tarefa = { tarefa, tempo };
    setValoresSalvos([...valoresSalvos, novaTarefa]);
    setTarefa('');
    setTempo('');
  };

    return (
        <form className="w-full mx-auto rounded-lg bg-cyan-800 border border-gray-200 p-5 text-white font-light mb-3 order-1 col-span-2">
            <div className="flex flex-col">
                <label>Escreva o que estudou</label>
                <input 
                    type="text"
                    value={tarefa}
                    onChange={(e) => setTarefa(e.target.value)}
                    className="bg-white-800" 
                    placeholder="Digite o nome do estudo realizado"/>
            </div>
            <div>
                <label></label>
                <input 
                    type="time"
                    value={tempo}
                    onChange={(e) => setTempo(e.target.value)}
                    placeholder="adicione o horario" />
            </div>
            <Button onClick={aoSalvar}>registrar</Button>
        </form>
    )
}

export default Formulario;