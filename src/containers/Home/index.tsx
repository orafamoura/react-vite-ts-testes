import Cronometro from '../../components/Cronometro/Index';
import Formulario from '../../components/Formulario';
import Lista from '../../components/Lista';
import '../../globals.css'

function Home() {
    return(
        <div className='w-full flex justify-between'>
            <Formulario/>
            <Lista/>
            <Cronometro/>
        </div>
    )
}

export default Home;