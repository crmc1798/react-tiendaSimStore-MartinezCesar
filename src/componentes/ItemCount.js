import React from 'react';
import { useState } from "react";



const ItemCount = ({stock, onAdd}) => {
    const [numero, setnumero] = useState(1);

    //console.log(productCartList[productCartList.length - 1])
    const resta = () => {
        if(numero!== 1){
            setnumero(numero-1);
            }
    }
    const suma = () => {
        if(numero<(stock)){
            setnumero(numero+1);
        }
    }

    const subirACarrito = () => {
        if((stock-numero)>-1){
            onAdd(numero);
        }
        else{
            alert("No hay stock suficiente");
        }

           
    }
    
    //console.log(stock-numero)
    return (
        
        <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="m-2">
                <button onClick={resta} type="button" className="btn btn-outline-dark mx-4">-</button>
                <strong>{numero}</strong>
                <button onClick={suma} type="button" className="btn btn-outline-dark mx-4">+</button>
            </div>
            <div className="m-2">
            <button onClick={subirACarrito} type="button" className="btn btn-outline-dark mx-4">Agregar al carrito</button>
            </div>

        </div>
    );
  }
  export default ItemCount