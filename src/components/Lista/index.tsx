import ItemLista from "./Item";

export default function Lista() {
    return(
        <div className="w-full mx-auto rounded-lg bg-cyan-800 border border-gray-200 p-5 text-white font-light mb-3 order-3 md:order-2 col-span-2 row-span-2">
            <ItemLista/>
        </div>
    )
}