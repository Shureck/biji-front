import TCell from "./Cell";
import './Table.css'
import React, { useState } from 'react'
import { useDrop } from 'react-dnd';

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
    return (
        <React.Fragment>
            <div className='TRow' ref={dropRef}>
                {basket.map(pet => <div key={pet.id}><TCell draggable id={pet.id} name={pet.name} /></div>)}
                {isOver && <div>Drop Here!</div>}
            </div>
        </React.Fragment>
    )
}
export default TRow;