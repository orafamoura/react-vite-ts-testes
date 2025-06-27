import Cronometro from '../../components/Cronometro/Index';
import Formulario from '../../components/Formulario';
import {Lista} from '../../components/Lista';
import Titulo from '../../components/Titulo';
import '../../globals.css'

function Home() {
    return(
        <div className='w-full'>
            <Titulo/>
            <div className=' w-full justify-self-center flex flex-col md:grid grid-cols-4 grid-rows-2 md:gap-4 md:w-xl'>
                <Formulario/>
                <Cronometro/>
                <Lista texto2='raphael'/>
            </div>

        </div>
    )
}

export default Home;