import TRow from "./Row";
import './Table.css'

function TTable(props) {

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