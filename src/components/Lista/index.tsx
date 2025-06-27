import { Item } from "./Item";
//import  valoresSalvos  from "../Formulario"

interface listaProps {
    texto2: string
}

export const Lista = ({texto2}: listaProps) => {
    return(
        <div className="w-full mx-auto rounded-lg bg-cyan-800 border border-gray-200 p-5 text-white font-light mb-3 order-3 md:order-2 col-span-2 row-span-2">
            <ul>
            <Item texto={texto2}/>
            </ul>
        </div>
    )
}   