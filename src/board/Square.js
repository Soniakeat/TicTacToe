import React from 'react';



const Square = props => 
    <div className="column" onClick={() => props.playerSelect(props.id)}>
        {props.value}
    </div>



export default Square;