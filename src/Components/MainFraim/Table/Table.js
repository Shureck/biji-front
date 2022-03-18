import TRow from "./Row";
import './Table.css'

let arr = [
    [
        { id: 1, name: 'dog' },
        { id: 2, name: 'cat' },
        { id: 3, name: 'fish' },
        { id: 4, name: 'hamster' },
    ],
    [
        { id: 5, name: 'ddd' },
        { id: 6, name: 'ddsa' }
    ]
];

function TTable(props) {

    return (
        <div className="TTable">
            { arr.map((item) => (
                <TRow arr={item} />
            ))
            }
        </div>
    );
}

export default TTable;