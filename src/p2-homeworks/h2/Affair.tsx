import React from "react";
import {AffairType} from "./HW2";
import css from './Affairs.module.css'


type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}; // need to fix

    return (
        <div>
            <span> className={css.list_item}>{props.affair.name}</span>
            <button className={css.btn} onClick={deleteCallback}>X</button>
        </div>
    );
}

export default Affair;


// <ol className="rectangle">
//     <li><a href="#">Элемент списка</a></li>
//     <li><a href="#">Элемент списка</a></li>
//     <li><a href="#">Элемент списка</a></li>
//     <li><a href="#">Элемент списка</a></li>
//     <li><a href="#">Элемент списка</a></li>
// </ol>