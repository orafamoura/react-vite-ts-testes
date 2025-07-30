import Formulario from '../../components/Formulario';
import Lista from '../../components/Lista';
import type { Tarefa } from "../../components/Formulario";
import { Link } from 'react-router-dom';

import '../../globals.css'
import { useState } from 'react';
import { Titulo } from '../../components/Titulo';

function Cronometer() {

        const [valoresSalvos, setValoresSalvos] = useState<Tarefa[]>([]);

    return(
        <div className='w-full'>
            <Titulo title='Cronometro'></Titulo>
            <div className=' w-full justify-self-center flex flex-col xl:grid grid-cols-4 grid-rows-2 gap-4 sm:w-xl'>
                <Formulario setValoresSalvos={setValoresSalvos} valoresSalvos={valoresSalvos} />
                <Lista tarefas={valoresSalvos}/>
                <Link to="/">Retornar a pagina inicial</Link>
            </div>
        </div>
    )
}

export default Cronometer;