import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl'

const buildControls = (props) =>{
    const controls = [
        {label:'Cheese',type:'cheese'},
        {label:'Meat',type:'meat'},
        {label:'Bacon',type:'bacon'},
        {label:'Salad',type:'salad'}
    ]
    return(
        <div className={classes.BuildControls}>
            {controls.map(control=>{
                return <BuildControl 
                key={control.label} 
                label={control.label} 
                added={()=>props.added(control.type)}
                removed={()=>props.removed(control.type)}/>
            })}
        </div>
    )
}

export default buildControls;
