import { useState } from "react";

let stock=25;

const ItemCount = () => {
    const [numero, setnumero] = useState(0);

    const resta = () => {
        if(numero!== 0){
            setnumero(numero-1);
            }
    }
    const suma = () => {
        if(numero<stock){
            setnumero(numero+1);
        }
    }
    return (
        
        <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="m-2">
                <button onClick={resta} type="button" class="btn btn-outline-dark mx-4">-</button>
                <strong>{numero}</strong>
                <button onClick={suma} type="button" class="btn btn-outline-dark mx-4">+</button>
            </div>

            <div className="m-2">
            <button type="button" class="btn btn-outline-dark mx-4">Agregar al carrito</button>
            </div>
        </div>
    )
  }
  export default ItemCount