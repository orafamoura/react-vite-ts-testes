import { useState } from "react";
import Button from "../Button";
import Relogio from "./Relogio";

export default function Cronometro() {    

    const [timerIsRunning, setTimerIsRunning] = useState(false);

    const [currentTime, setCurrentTime] = useState({
        hours: 0,
        minutes: 0,
        seconds: 0
    })

    let timerCounter = 0      

    const iniciaRelogio = () => {
        handleTimer();
        setTimerIsRunning(() => {
            return timerIsRunning ? false : true;
        });
    }    

    const handleTimer = () => {
        if (timerIsRunning) {
            timerCounter++;
            const seconds = Math.floor(timerCounter / 10) % 60;
            const minutes = Math.floor(timerCounter / 600) % 60;
            const hours = Math.floor(timerCounter / 36000) % 24;
            setCurrentTime({
                hours : hours,
                minutes : minutes,
                seconds : seconds
            })
        }
    }

    return (
        <div className="w-full mx-auto justify-items-center rounded-lg bg-cyan-800 border border-gray-200 text-white font-light mb-3 p-5 order-2 md:order-3 row-start-2 col-span-2">
            <p>Cronometro</p>
            <div>
                <Relogio horas={currentTime.hours} minutos={currentTime.minutes} segundos={currentTime.seconds}/>
            </div>
            <Button onClick={iniciaRelogio}>Adicionar</Button>
        </div>
    )
}