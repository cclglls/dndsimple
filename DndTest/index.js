import React from 'react';
import styled from 'styled-components'; // npm install --save styled-components

import Draggable from '../Draggable';
import Droppable from '../Droppable';
import DropCard from './DropCard'

const Wrapper = styled.div`
    width: 100%;
    padding : 32px;
    background-image: url('/images/background.jpg');
    
`;

const Input = styled.div`
    padding : 10px;
    color: #555;
    background-color: white;
    border-radius: 5px
    
`;

const DroppableStyle = {
    backgroundColor: '#555',
    borderRadius: '8px',
    width: '300px',
    height: '400px',
    margin: '20px',
    padding : '5px',

}

export default class DndTest extends React.Component {
    render(){
        return (
            <Wrapper>
                
                    <Droppable id="dr-1" style={DroppableStyle}>
                        <Draggable id='item1' style={{ margin: '8px'}}><DropCard/></Draggable>
                        <Draggable id='item2' style={{ margin: '8px'}}><Input>Calendar </Input></Draggable>
                        <Draggable id='item3' style={{ margin: '8px'}}><Input>Mail Box </Input></Draggable>                   
                    </Droppable>

                    <Droppable id="dr-2" style={DroppableStyle}>

                    </Droppable>

                    <Droppable id="dr-3" style={DroppableStyle}>

                    </Droppable>
                
            </Wrapper>
        )
    }
}