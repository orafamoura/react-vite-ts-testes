
interface ItemProps {
  texto: string;
}

export const Item = ({ texto }: ItemProps) => {
  return <li>{texto}</li>;
};
