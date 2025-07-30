import { Link } from 'react-router-dom';
import '../../globals.css'
import { Titulo } from '../../components/Titulo';
import TimerPomodoro from './components/TimerPomodoro';

function Pomodoro() {

        //const [valoresSalvos, setValoresSalvos] = useState<Tarefa[]>([]);

    return(
        <div className='w-full'>
            <Titulo title='Pomodoro'></Titulo>
            <div className=' w-full justify-self-center flex flex-col xl:grid grid-cols-4 grid-rows-2 gap-4 sm:w-xl'>
                <TimerPomodoro></TimerPomodoro>
                <Link to="/">Retornar a pagina inicial</Link>
            </div>
        </div>
    )
}

export default Pomodoro;