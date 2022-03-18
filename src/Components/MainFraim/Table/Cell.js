import './Table.css'
import { useDrag } from 'react-dnd'

const TCell = ({ id, name }) => {
    const [{ isDragging }, dragRef] = useDrag({
        type: 'element',
        item: { id, name },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    })
    return (
        <div className='pet-card' ref={dragRef}>
            {name}
            {isDragging && 'Oops'}
        </div>
    )
}
export default TCell;