import React from 'react';
import Auxiliary from "../../../hoc/Auxiliary";

const orderSummary = (props) =>{
    const summaryInfo = Object.keys(props.ingredients).map(igKey=>{
        return <li key={igKey}><strong>{igKey}:</strong>{props.ingredients[igKey]}</li>
    })
    return(
    <Auxiliary>
        <p>Have a delicious burger</p>
        <p>Ypur order summary</p>
        {summaryInfo}
        <p>Proceed to checkout?</p>
    </Auxiliary>
    );
}

export default orderSummary;