import React from 'react'
import { useState } from "react";
import ReactDOM from 'react-dom';
import {getByDisplayValue} from "@testing-library/react";



function Calculation() {
    const [r1,setR1] = useState("0");
    const [r2,setR2] = useState("0");
    const [r3,setR3] = useState("0");
    const [total,setTotal] = useState("0");
    const [endme,setEndme] = useState();



function calcSer(){
   let total = 1*(parseInt(r1)+parseInt(r2)+parseInt(r3));
   setEndme(total);
   total = "R Seriell =  "+total;
   setTotal(total);

}
function calcPar(){
        let total = 1/((1/parseInt(r1))+(1/parseInt(r2))+(1/parseInt(r3)));
    setEndme(total);
        total = "R Paralell = "+total;
        setTotal(total);


}
function Tabelle(props){
    return(

        <table>
            <tr>
                <th>U[V]</th>
                <th>I[A]</th>
            </tr>
            <tr>
                <td>1</td>
                <td>{1/props.widerstand}</td>
            </tr>
            <tr>
                <td>2</td>
                <td>{2/props.widerstand}</td>
            </tr>
            <tr>
                <td>3</td>
                <td>{3/props.widerstand}</td>
            </tr>
            <tr>
                <td>4</td>
                <td>{4/props.widerstand}</td>
            </tr>
            <tr>
                <td>5</td>
                <td>{1/props.widerstand}</td>
            </tr>
            <tr>
                <td>5</td>
                <td>{1/props.widerstand}</td>
            </tr>
            <tr>
                <td>6</td>
                <td>{6/props.widerstand}</td>
            </tr>
            <tr>
                <td>7</td>
                <td>{7/props.widerstand}</td>
            </tr>
            <tr>
                <td>8</td>
                <td>{8/props.widerstand}</td>
            </tr>
            <tr>
                <td>9</td>
                <td>{9/props.widerstand}</td>
            </tr>
            <tr>
                <td>10</td>
                <td>{10/props.widerstand}</td>
            </tr>
        </table>


    )
}

    return (
        <form>
            <label>R1:
                <input
                    id = "r1"
                    type="number"
                    value={r1}
                    onChange={(e) => setR1(e.target.value)}

                />
            </label>
            <p></p>
            <label>R2:
                <input
                    id="r2"
                    type="number"
                    value={r2}
                    onChange={(e) => setR2(e.target.value)}
                />
            </label>
            <p></p>
            <label>R3:
                <input
                    id="r3"
                    type="number"
                    value={r3}
                    onChange={(e) => setR3(e.target.value)}
                />
            </label>
            <br/>
                <button  type="button" onClick={() => {calcSer()}}>Serienschaltung</button>
                <button  type="button" onClick={() => {calcPar()}}>Paralellschaltung</button>
                <h1> {total}</h1>
            <h2>Stromverlauf von Spannungen von 0V - 10V </h2>
           <Tabelle widerstand = {endme}></Tabelle>

        </form>



    )
}



ReactDOM.render(<Calculation />, document.getElementById('root'));



export default Calculation;
