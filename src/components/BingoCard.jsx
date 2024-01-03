import React, { useState, useEffect } from "react";

const BingoCard = () => {
    const [bingoData, setBingoData] = useState({});
    const [markedCells, setMarkedCells] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://192.168.5.73:3000/api/generate-card', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            // body: JSON.stringify({ /* payload data */ })
        })
        .then(response => {
            if (!response.ok) {
                //throw new Error(⁠ HTTP error! Status: ${response.status} ⁠);
            }
            return response.json();
        })
        .then(data => {
            setBingoData(data);
        })
        .catch(error => setError(error))
        .finally(() => setIsLoading(false));
    }, []);

    const handleCellClick = (rowIndex, cellIndex) => {
        const newMarkedCells = [...markedCells];
        const cellKey = `${rowIndex}-${cellIndex}`;

        if (newMarkedCells.includes(cellKey)) {
            newMarkedCells.splice(newMarkedCells.indexOf(cellKey), 1);
        } else {
            newMarkedCells.push(cellKey);
        }

        setMarkedCells(newMarkedCells);
    };

    const rows = Object.entries(bingoData).map(([letter, numbers], rowIndex) => (
        <div key={rowIndex} className="bingo-row">
            <div className="bingo-cell bingo-header-cell">{letter}</div>
            {numbers.map((value, cellIndex) => {
                const cellKey = `${rowIndex}-${cellIndex}`;
                const isMarked = markedCells.includes(cellKey);

                return (
                    <div
                        key={cellIndex}
                        className={`bingo-cell ${isMarked ? 'marked-cell' : ''}`}
                        onClick={() => handleCellClick(rowIndex, cellIndex)}
                    >
                        {value}
                    </div>
                );
            })}
        </div>
    ));

    return <div className="bingo-card">{rows}</div>;
};

export default BingoCard;
