import React, { useState } from "react";

const BingoCard = () => {
    // const letters = ['B', 'I', 'N', 'G', 'O'];
    const [markedCells, setMarkedCells] = useState([]);

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

    // const headerRow = (
    // <div className="bingo-row">
    //     {letters.map((letter, index) => (
    //     <div key={index} className="bingo-cell bingo-header-cell">
    //         {letter}
    //     </div>
    //     ))}
    // </div>
    // );

    // const rows = Array.from({ length: 5 }, (_, rowIndex) => (
    //     <div key={rowIndex} className="bingo-row">
    //         {Array.from({ length: 6 }, (_, cellIndex) => (
    //             <div key={cellIndex} className="bingo-cell"></div>
    //         ))}
    //     </div>
    // ));

    // return (
    //     <div className="bingo-card">
    //         {/* {headerRow} */}
    //         {rows}
    //     </div>
    // );

    const rows = Array.from({ length: 5 }, (_, rowIndex) => (
        <div key={rowIndex} className="bingo-row">
            {Array.from({ length: 5 }, (_, cellIndex) => {
                const cellKey = `${rowIndex}-${cellIndex}`;
                const isMarked = markedCells.includes(cellKey);

                return (
                    <div
                        key={cellIndex}
                        className={`bingo-cell ${isMarked ? 'marked-cell' : ''}`}
                        onClick={() => handleCellClick(rowIndex, cellIndex)}
                    ></div>
                );
            })}
        </div>
    ));

    return <div className="bingo-card">{rows}</div>;
};


export default BingoCard;