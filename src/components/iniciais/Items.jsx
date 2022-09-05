import React from "react";
import  { useState } from "react";
import "./Items.css"

export default (props) => {

    const [isSelect, setSelect] = useState(false);
    
    const style = {
        borderColor: "red"
    }



    if(isSelect){
    return (
        <button 
        className="Items" 
        onClick={() => setSelect(false)} 
        style={style}
        >
                <div className="Descrição">
                    <span>
                        Combo 1
                    </span>
                    <p>
                        3 x-egg burguer, batata recheada, nuggets, 1 pakera ou 1 sukita 2lts
                    </p>
                    <div>
                        R$50,00
                    </div>
                </div>
                <div className="Img">
                    {props.children}
                </div>
        </button >
    )
    }else{
        return (
            <button className="Items" onClick={() => setSelect(true)} >
                <div className="Descrição">
                    <span>
                        Combo 1
                    </span>
                    <p>
                        3 x-egg burguer, batata recheada, nuggets, 1 pakera ou 1 sukita 2lts
                    </p>
                    <div>
                        R$50,00
                    </div>
                </div>
                <div className="Img">
                    {props.children}
                </div>
            </button >
        )   
    }

}