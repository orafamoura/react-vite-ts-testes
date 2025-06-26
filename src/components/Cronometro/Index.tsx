import Button from "../Button";
import Relogio from "./Relogio";

export default function Cronometro() {
    return (
        <div className="w-full mx-auto rounded-lg bg-cyan-800 border border-gray-200 p-5 text-white font-light mb-3 order-2 md:order-3 row-start-2 col-span-2">
            <p>Cronometro</p>
            <div>
                <Relogio/>
            </div>
            <Button>Adicionar</Button>
        </div>
    )
}