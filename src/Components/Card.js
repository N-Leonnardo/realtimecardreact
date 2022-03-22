import React, {useState} from 'react';
import 'realtimecard/src/styles/cardStyles.css'

const Card = props =>{
    const [number, setNumber] = useState("")

    function myFunction(e){

    }

    return(

        <div>

            <div className='card'>
                <label>{number}</label> 
                <input type="text" onChange={ (e) => setNumber(e.target.value) } />
            </div>


        </div>

    )




}

export default Card
