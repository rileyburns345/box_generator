import React, {useState} from 'react'

const ColorForm = props => {

    const [color, setColor] = useState('')

    const getColor = (e) => {
        setColor(e.target.value)
    }

    const populateColor = (e) => {
        e.preventDefault()
        props.addToColorList(color)
        document.getElementById('colorForm').reset()
        
    }


    return (
        <div>
            <h2>Color Form</h2>
            <form id="colorForm" onSubmit={populateColor}>
                <div>
                    <label htmlFor='color'>Color</label>
                    <input id="colorPick" type='text' name='color' onChange={getColor}/>
                </div>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default ColorForm