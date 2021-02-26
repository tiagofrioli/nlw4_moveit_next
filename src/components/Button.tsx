import { useState } from "react";



interface ButtonProps{
    color: string;
    children: string;
}

export function Button(props:ButtonProps){

    const [cont, setCont] = useState(1);

    function increment(){
        setCont(cont + 1);
    }

    return (
        <button style={{backgroundColor: props.color}} type="button" onClick={increment} >
            {props.children} <strong>{cont}</strong>
            </button>
    );
}