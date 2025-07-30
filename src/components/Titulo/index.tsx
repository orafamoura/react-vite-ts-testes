type tituloProps = {
  title: string;
};

export const Titulo = ({ title }: tituloProps) => {
  return (
    <h1 className="text-2xl text-center my-4">{title}</h1>
  );
}
