import React, {useState} from 'react'

import './boxes.css'

const Boxes = props => {

    return(
        <ul>{
            props.boxes.map((color, i) => 
                <div class="colorBox" id={i} style={{background:color, height:50, width:50}}>
                </div>
            )
            }
        </ul>
    )
}

export default Boxes