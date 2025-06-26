import { useState } from "react";
import Button from "../Button";

function Formulario() {

    const [tarefa, setTarefa] = useState('')
    const [tempo, setTempo] = useState('')
    const [valoresSalvos, setValoresSalvos] = useState<string[][]>([])


    const aoSalvar = () => {
        setValoresSalvos([...valoresSalvos, [tarefa, tempo]])
        setTarefa('')
        setTempo('')
        console.log(valoresSalvos)
    }

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