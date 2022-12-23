import React from 'react'
import styled from 'styled-components'
import tick from "./assets/tick.svg"
const RestaurantCardStyling = styled.div`
.cardStylingMainDiv{
    height:fit-content;
    line-height:0.7;
    width:90%; 
    padding:10px;
    margin:10px;
    margin:auto;
}
.cardStylingMainDiv:hover{
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
h1{
    font-size:35px;
    font-weight:400;
    font-Family:fantasy;
}
h3{
    color:#db343b;
}
h3:hover{
    text-decoration:none;
}
.optionsCWD{
    display:flex;
    text-align:center;
    margin:auto;
    justify-content:center;
    gap:5%;
}
.cardUnderlineHower:hover{
    text-decoration:none;
    cursor:pointer;
}
`
const RestaurantCard = ({ title, time, address, contact, catering, wifi, delivery }) => {
    // console.log(title,time,address,contact,catering,wifi,delivery)
    return (
        <RestaurantCardStyling>
            <div className='cardStylingMainDiv'>
                <h1><u>{title}</u></h1>
                <h4>{`Open Now: Closes at ${time}`}</h4>
                <p>{address}</p>
                <p>{contact}</p>
                <div className='optionsCWD'>
                    {catering && <p><img height={"25rem"} style={{ padding: "0vw 0vw", cursor: "pointer" }} className="cardUnderlineHower" src={tick} alt="" />Catering</p>}
                    {wifi && <p><img height={"25rem"} style={{ padding: "0vw 0vw", cursor: "pointer" }} className="cardUnderlineHower" src={tick} alt="" />WiFi</p>}
                    {delivery && <p><img height={"25rem"} style={{ padding: "0vw 0vw", cursor: "pointer" }} className="cardUnderlineHower" src={tick} alt="" />Delivery</p>}
                </div>
                <h3 className="cardUnderlineHower"><u className="cardUnderlineHower">GET DIRECTIONS</u></h3>
                <h3 className="cardUnderlineHower"><u className="cardUnderlineHower">DELIVERY</u></h3>
            </div>
        </RestaurantCardStyling>
    )
}

export default RestaurantCard