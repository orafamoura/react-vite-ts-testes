import Button from "../Button";


function Formulario() {
    return (
        <form className="order-1">
            <div>
                <label></label>
                <input type="text" placeholder="Digite o nome do estudo realizado"/>
            </div>
            <div>
                <label></label>
                <input type="time" placeholder="adicione o horario" />
            </div>
            <Button>registrar</Button>
        </form>
    )
}

export default Formulario;