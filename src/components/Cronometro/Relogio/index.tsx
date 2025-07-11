interface relogioProps {
    horas: number;
    minutos: number;
    segundos: number
}

export default function Relogio({horas, minutos, segundos}: relogioProps) {
    return(
        <div className="gap-4 text-center w-full flex mx-auto justify-between">
            <div className="w-full">
                <p className="text-3xl font-medium text-white">{horas}</p>
                <p className="text-sm text-white-500">Horas</p>
            </div>
            <div className="w-full">
                <p className="text-3xl font-medium text-white">{minutos}</p>
                <p className="text-sm text-white-500">Minutos</p>
            </div>
            <div className="w-full">
                <p className="text-3xl font-medium text-white">{segundos}</p>
                <p className="text-sm text-white-500">Segundos</p>
            </div>
        </div>
    )
}