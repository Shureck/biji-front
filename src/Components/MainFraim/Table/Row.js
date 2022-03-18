import TCell from "./Cell";
import './Table.css'
import React, { useState } from 'react'
import {useDrag, useDrop} from 'react-dnd';

const TRow = (props) => {
    const [basket, setBasket] = useState(props.arr)
    const [{ isOver }, dropRef] = useDrop({
        accept: 'element',
        drop: (item) => setBasket((basket) =>
            !basket.includes(item) ? [...basket, item] : basket),
        collect: (monitor) => ({
            isOver: monitor.isOver()
        })

    })
    const updateArr = (value) => {
        if(basket.includes(value)){
            console.log(value)
            setBasket(basket.filter(function(item) {
                return item !== value
            }))
        }
    }
    return (
        <React.Fragment>
            <div className='TRow' ref={dropRef}>
                {basket.map(pet => <div key={pet.id}><TCell draggable id={pet.id} name={pet.name} updateArr={updateArr}/></div>)}
                {isOver && <div>Drop Here!</div>}
            </div>
        </React.Fragment>
    )
}
export default TRow;