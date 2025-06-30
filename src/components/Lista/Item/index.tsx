
interface itemProps {
  tituloItem: string;
  horasEstudadas: string
}

export const Item = ({ tituloItem, horasEstudadas }: itemProps) => {
    return (
        <li>
            <h2>{tituloItem}</h2>
            <p>{horasEstudadas}</p>
        </li>
    );
};
