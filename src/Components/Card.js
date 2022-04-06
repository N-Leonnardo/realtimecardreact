import React, {useState} from 'react';
import '/Users/admin/Documents/realtimeCard/realtimecard/src/styles/cardStyles.css'

const Card = props =>{
    const [cardHolder, setCardHolder] = useState("")
    const [number, setNumber] = useState("")
    const [expDate, setExpDate] = useState("")
    const [cvc, setCvc] = useState("")
    const [flag, setFlag] = useState("")
    const [flagWidth, setFlagWidth] = useState("100px")

    function numberHandler(){
        console.log(number[0])
        setFlagWidth("40px")
        setFlag("https://www.superiorlawncareusa.com/wp-content/uploads/2020/05/loading-gif-png-5.gif")

        if(number[0]=== "4"){
            setFlagWidth("80px")
            setFlag("https://i.imgur.com/2aNFArA.png")
        }
        if(number[0]=== "5"){
            setFlagWidth("80px")
            setFlag("https://i.imgur.com/Djq8urj.png")
        }
    }

    return(

        <div className='boddy'>
            <div className='card'>
                <h2 className='number dataCard'>
                    {number}
                </h2>
                <div className=''>

                </div>

                <h2 className='expDate dataCard'>
                    {expDate}
                </h2>

                <div className='cardBox'>

                    <h2 className=' cardHolder dataCard'>
                        {cardHolder}
                    </h2>



                    <img className='flag' src={flag} width={flagWidth} ></img>

                </div>

            </div>

            <div className='cardInfo'>
                <h3>Card Holder Name</h3>
                <input type="text" maxlength="24" onChange={ (e) => setCardHolder(e.target.value) } />
                <h3>Card Number</h3>
                <input type="text" maxlength="22" onChange={ (e) => {setNumber(e.target.value); numberHandler()}}/>
                <h3>Expiration Date</h3>
                <input type="month" onChange={ (e) => setExpDate(e.target.value) } />
                <h3>CVC</h3>
                <input type="password" maxlength="3" onChange={ (e) => setCvc(e.target.value) } />
            </div>


        </div>

    )




}

export default Card
