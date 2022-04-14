import './Table.css'
import React, {useState} from 'react'

function TTable(props) {

    const [arr, editArr]= useState([
        {
            tableName: "Lol",
            tableID: 0,
            elements:
                [
                    {id: 1, table: 1, name: 'dog'},
                    {id: 2, table: 1, name: 'cat'},
                    {id: 3, table: 1, name: 'fish'},
                    {id: 4, table: 1, name: 'hamster'}
                ]
        },
        {
            tableName: "Kek",
            tableID: 1,
            elements:
                [
                    {id: 5, table: 2, name: 'ddd'},
                    {id: 6, table: 2, name: 'ddsa'}
                ]
        }
    ])

    const editTableElements=(tableId,obj)=>{
        let buff = JSON.parse(JSON.stringify(arr))
        let index=buff.findIndex((i)=>i.tableID===tableId)
        console.log(buff, index)
        buff[index].elements=obj
        editArr(buff)
    }

    let lastFromTableId = -1
    let lastEnteredTableId = -1
    let dragElementId = -1
    let isStart = false
    let isEnd = false

    function saveElement(_petId,_lastFromTableId,_lastEnteredTableId){
        if (_petId != -1){
            let a = arr.find((i)=>i.tableID===_lastFromTableId).elements.filter(i => i == arr.find(o => o.tableID === _lastFromTableId).elements.find(o => o.id === _petId))
            let buff = JSON.parse(JSON.stringify(arr))
            let index = buff.findIndex((i)=>i.tableID===_lastEnteredTableId)
            console.log(buff, index)
            buff[index].elements.push(a[0])
            editArr(buff)
            // let aa = editArr(arr.find((i)=>i.tableID===_lastEnteredTableId).elements.push(a[0]))
            // // let new_arr =
            // // editTableElements(_lastEnteredTableId,a)
            // console.log(aa)

        }
    }


    function onDragEndHandler(petId){
        let newArr = JSON.parse(JSON.stringify(arr))
        console.log("onDragEndHandler ",petId," ", lastFromTableId, " ", lastEnteredTableId)
        saveElement(petId,lastFromTableId,lastEnteredTableId);
        lastFromTableId = -1
        lastEnteredTableId = -1
        dragElementId = -1
        isStart = false
        isEnd = false
    }

    function onDragProgress(petId){
        if (petId != dragElementId){
            dragElementId = petId
            isStart = true
        }
        if (petId == dragElementId && lastFromTableId != -1){
            isStart = false
            isEnd = true
        }
    }

    function dragstart_handler(petId) {
        isEnd = false
        if (petId != dragElementId){
            dragElementId = petId
            isStart = true
        }
        else{
            isStart = false
            isEnd = true
        }
        console.log("dragstart_handler ",petId)
    }

    function dragOverHandler(...obj){
        if (isStart){
            lastFromTableId = obj[0]
        }
        if (isEnd){
            lastEnteredTableId=obj[0]
        }
        //saveElement(obj[0]);
        console.log("dragOverHandler ",obj)
    }

    return (
        <div className="TTable">
            { arr.map((item,i) => (
                <React.Fragment key={i}>
                    <div className='TRow' name={item.tableID} onDragEnter={dragOverHandler.bind(this,item.tableID)}>
                        {item.elements.map(pet =>(
                            <div key={pet.id}>
                                <div className='pet-card'
                                     draggable={true}
                                     onDragStart={dragstart_handler.bind(this,pet.id)}
                                     onDragEnd={onDragEndHandler.bind(this,pet.id)}
                                        onDrag={onDragProgress.bind(this,pet.id)}>
                                    {pet.name}
                                </div>
                            </div>
                        ))}

                    </div>
                </React.Fragment>
            ))
            }
        </div>
    );
}

export default TTable;