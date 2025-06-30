import type { Tarefa } from "../Formulario";
import { Item } from "./Item";


interface ListaProps {
  tarefa: Tarefa[];
}

function Lista({ tarefa }: ListaProps) {
  return (
    <div className="w-full mx-auto rounded-lg bg-cyan-800 border border-gray-200 p-5 text-white font-light mb-3 order-3 md:order-2 col-span-2 row-span-2">
      <ul>
        {tarefa.map((item, index) => (
          <Item
            key={index}
            tituloItem={item.tarefa}
            horasEstudadas={item.tempo}
          />
        ))}
      </ul>
    </div>
  );
}

export default Lista;
