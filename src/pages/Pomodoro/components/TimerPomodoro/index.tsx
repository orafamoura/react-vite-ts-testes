import { useEffect, useRef, useState } from "react"
import Button from "../../../../components/Button";
import Relogio from "../../../../components/Cronometro/Relogio";


export default function TimerPomodoro(){

    const [timerIsRunningPomodoro, setTimerIsRunningPomodoro] = useState(false);
    const [currentTimePomodoro, setCurrentTimePomodoro] = useState({
        hours: 0,
        minutes: 15,
        seconds: 0
    })

    const timerCounter = useRef(0); //9000 = 15 minutos

    const startPomodoro15 = () => {
        timerCounter.current = 9000
        setTimerIsRunningPomodoro(true)
    }

    const startPomodoro25 = () => {
        timerCounter.current = 15000
        setTimerIsRunningPomodoro(true)
    }

    const stopPomodoro = () => {
        setTimerIsRunningPomodoro(false)
    }

    useEffect(() => {
        if (timerIsRunningPomodoro) {
            const interval = setInterval(() => {
                if (timerIsRunningPomodoro) {
                    timerCounter.current --;
                    const seconds = Math.floor(timerCounter.current / 10) % 60;
                    const minutes = Math.floor(timerCounter.current / 600) % 60;
                    const hours = Math.floor(timerCounter.current / 36000) % 24;

                    setCurrentTimePomodoro({
                        seconds : seconds,
                        minutes : minutes,
                        hours : hours
                    })

                    if(timerCounter.current === 0 ){
                        stopPomodoro()
                    }
                }
        }, 100);
        return () => clearInterval(interval);
        }
    }, [timerIsRunningPomodoro])


    return(
        <div className="bg-black">
        <Relogio horas={currentTimePomodoro.hours} minutos={currentTimePomodoro.minutes} segundos={currentTimePomodoro.seconds}></Relogio>
        <Button onClick={startPomodoro15}></Button>
        <Button onClick={startPomodoro25}></Button>
        </div>
    )
}