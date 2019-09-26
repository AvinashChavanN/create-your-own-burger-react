import React from 'react';
import classes from './Modal.css'
import Auxiliaty from '../../../hoc/Auxiliary';
import BackDrop from '../BackDrop/BackDrop';
const modal = (props) =>{
    return (
        <Auxiliaty>
        <BackDrop show={props.show} cancelOrder={props.cancelOrder}/>
        <div className={classes.Modal} style={
            {
                transition: props.show?'transformY(0)':'transformY(-100vh)',
                opacity: props.show?'1':'0'
            }
        }>
            {props.children}
        </div>
        </Auxiliaty>
    );
        
}

export default modal;