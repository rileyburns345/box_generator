import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import styled from 'styled-components';

import ColorForm from './components/color_form/color_form.js'
import Boxes from './components/boxes/boxes.js'
import StyledBox from './components/styleboxes/styledbox.js';


function App() {

  const [boxes, setBoxes] = useState([])

  const addToColorList = (color) => {
    console.log('color function2: ', color)
    setBoxes(boxes => {
      const boxList = boxes.concat(color)
      return boxList
    })
  }

  console.log('boxes state: ', boxes)
  return (
    <div className="App">
      <h1>Box Generator</h1>
      <ColorForm addToColorList={addToColorList}/>
      <Boxes boxes={boxes}/>
    </div>
  );
}

export default App;
