import React from 'react';
import Auxiliary from "../../../hoc/Auxiliary";
import Button from '../../UI/Button/Button'

const orderSummary = (props) =>{
    const summaryInfo = Object.keys(props.ingredients).map(igKey=>{
        return <li key={igKey}><strong>{igKey}:</strong>{props.ingredients[igKey]}</li>
    })
    return(
    <Auxiliary>
        <p>Ypur order summary:</p>
        <p>A delicious burger with following ingredients:</p>
        {summaryInfo}
        <p><strong>Total Price: ${props.total.toFixed(2)}</strong></p>
        <p>Proceed to checkout?</p>
        <Button clicked={props.cancelOrder} btnType="Danger">CANCEL</Button>
        <Button clicked={props.continueOrder} btnType="Success">CONTINUE</Button>
    </Auxiliary>
    );
}

export default orderSummary;