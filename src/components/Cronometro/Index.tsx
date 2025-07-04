import { useState, useEffect, useRef } from "react";
import Button from "../Button";
import Relogio from "./Relogio";
    
export default function Cronometro() {    

    const [timerIsRunning, setTimerIsRunning] = useState(false);
    const [currentTime, setCurrentTime] = useState({
        hours: 0,
        minutes: 0,
        seconds: 0
    })
    const [tentativa, setTentativa] = useState('parar')
    const timerCounter = useRef(0);

    const iniciaRelogio = () => {
        setTimerIsRunning(true)
        setTentativa('parar')
    }

    const pararRelogio = () => {
        setTimerIsRunning(false)
    };

    const reiniciarRelogio = () => {
        timerCounter.current = 0
        setCurrentTime({
            hours: 0,
            minutes: 0,
            seconds : 0
        })
        setTimerIsRunning(false)
        }

    const logicaBotoes = () => {
        switch (tentativa) {
            
            case 'parar' :
                setTentativa('reiniciar')
                return pararRelogio();
            case 'reiniciar' :
                setTentativa('parar')
                return reiniciarRelogio();
        }
    }

    useEffect(() => {
        if (timerIsRunning) {
        const interval = setInterval(() => {
           const handleTimer = () => {
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
            }; handleTimer()
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
            <Button onClick={iniciaRelogio}>Adicionar</Button>
            <Button onClick={logicaBotoes}>{tentativa}</Button>
        </div>
    )
}