import React, {Fragment} from "react";
import MenuLateral from "./components/iniciais/MenuLateral";
import Items from "./components/iniciais/Items";
import "./App.css"
import img from "./components/imgs/teste.jpg"

export default (props) => {

    console.log(props)


    return (
        <Fragment >
            <MenuLateral />
            <div className="Cardapio">
                <Items >
                    <img src={img} alt="Combo 1" className="img1" />
                </Items>
                
            </div>
        </Fragment>
    )
}