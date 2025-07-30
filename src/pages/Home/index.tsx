//import { Link } from 'react-router-dom';

import Button from "../../components/Button";

function Home(){
    return (
        <div className="w-full h-full flex justify-center items-center gap-4 place-items-center">
            <div className="bg-black rounded ">
                <h2>Pomodoro</h2>
                <Button></Button>
            </div>
            <div className="bg-black rounded">
                <h2>Cronometro</h2>
                <Button></Button>
            </div>
        </div>
    );
}

export default Home;