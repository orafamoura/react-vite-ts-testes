import Button from "../Button";
import Relogio from "./Relogio";


let decSec = 0;
let contagem: boolean;

function logicaCronometro() {
decSec ++;

  const seg = Math.floor(decSec / 10) % 60;
  const min = Math.floor(decSec / 600) % 60;
  const horas = Math.floor(decSec / 36000) % 24;

return {horas, min, seg};
}

export default function Cronometro() {

    const tempo = logicaCronometro()

    const iniciaRelogio = () => {
        if(contagem === true){return console.log(tempo);}
        contagem = true;
        console.log(tempo)
    }   

    return (
        <div className="w-full mx-auto justify-items-center rounded-lg bg-cyan-800 border border-gray-200  text-white font-light mb-3 p-5 order-2 md:order-3 row-start-2 col-span-2">
            <p>Cronometro</p>
            <div>
                <Relogio horas={tempo.horas} minutos={tempo.min} segundos={tempo.seg}/>
            </div>
            <Button onClick={iniciaRelogio}>Adicionar</Button>
        </div>
    )
}