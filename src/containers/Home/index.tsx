import Cronometro from '../../components/Cronometro';
import Formulario from '../../components/Formulario';
import Lista from '../../components/Lista';
import Titulo from '../../components/Titulo';
import type { Tarefa } from "../../components/Formulario";

import '../../globals.css'
import { useState } from 'react';

function Home() {

      const [valoresSalvos, setValoresSalvos] = useState<Tarefa[]>([]);

    return(
        <div className='w-full'>
            <Titulo/>
            <div className=' w-full justify-self-center flex flex-col md:grid grid-cols-4 grid-rows-2 md:gap-4 md:w-xl'>
                <Formulario setValoresSalvos={setValoresSalvos} valoresSalvos={valoresSalvos} />
                <Cronometro/>
                <Lista tarefa={valoresSalvos}/>
            </div>
        </div>
    )
}

export default Home;