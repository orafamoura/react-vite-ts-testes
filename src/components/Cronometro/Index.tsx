import { useState, useEffect, useRef } from "react";
import Button from "../Button";
import Relogio from "./Relogio";

interface CronometroProps {
    valorRelogio: ( valores: {
        hours: number,
        minutes: number,
        seconds: number
    }) => void
}

export default function Cronometro({valorRelogio}: CronometroProps) {    

    const [timerIsRunning, setTimerIsRunning] = useState(false);
    const [currentTime, setCurrentTime] = useState({
        hours: 0,
        minutes: 0,
        seconds: 0
    })
    const [startClock, setStartClock] = useState('Iniciar')
    const [stopClock, setStopClock] = useState('Parar')
    const timerCounter = useRef(0);

    const iniciaRelogio = () => {
        setTimerIsRunning(true)
        setStartClock('Parar')
        setStartClock('Iniciar')
        if(timerIsRunning === true && stopClock === 'Reiniciar') {
            setStartClock('Iniciar')
            setStopClock('Parar')
        } else if (timerIsRunning === false && stopClock === 'Reiniciar') {
            setStopClock('Parar')
        }
    }

    const pararRelogio = () => {
        setTimerIsRunning(false)
        if(timerIsRunning === true) {
            setStartClock('Continuar')
        }
    };

    const reiniciarRelogio = () => {
        valorRelogio(currentTime)

         /*valorRelogio = {
            hours: currentTime.hours,
            minutes: currentTime.minutes,
            seconds: currentTime.seconds
        }*/

        timerCounter.current = 0
        setCurrentTime({
            hours: 0,
            minutes: 0,
            seconds : 0
        })
        setTimerIsRunning(false)
        setStartClock('Iniciar')
        setStopClock('Parar')

    }

    const logicaBotoes = () => {
        switch (stopClock) {
            case 'Parar' :
                if ( timerIsRunning === false){
                    setStopClock('Parar')
                } else {
                    setStopClock('Reiniciar')
                }
                return pararRelogio();
            case 'Reiniciar' :
                return reiniciarRelogio();
        }
    }

    useEffect(() => {
        if (timerIsRunning) {
        const interval = setInterval(() => {
                if (timerIsRunning) {
                    timerCounter.current ++;
                    const seconds = Math.floor(timerCounter.current / 10) % 60;
                    const minutes = Math.floor(timerCounter.current / 600) % 60;
                    const hours = Math.floor(timerCounter.current / 36000) % 24;
                    setCurrentTime({
                        hours : hours,
                        minutes : minutes,
                        seconds : seconds
                    })
                }
        }, 100);
        return () => clearInterval(interval);
        }
    }, [timerIsRunning]);

    return (
        <div className="w-full mx-auto justify-items-center rounded-lg bg-cyan-800 border border-gray-200 text-white font-light mb-3 p-5 order-2 md:order-3 row-start-2 col-span-2">
            <p>Cronometro</p>
            <div>
                <Relogio horas={currentTime.hours} minutos={currentTime.minutes} segundos={currentTime.seconds}/>
            </div>
            <div className="flex gap-4">
            <Button onClick={iniciaRelogio}>{startClock}</Button>
            <Button onClick={logicaBotoes}>{stopClock}</Button>
            </div>
        </div>
    )
}