import React from "react";

const BingoCard = () => {
    const rows = Array.from({ length: 5 }, (_, rowIndex) => (
        <div key={rowIndex} className="bingo-row">
            {Array.from({ length: 5 }, (_, cellIndex) => (
                <div key={cellIndex} className="bingo-cell"></div>
            ))}
        </div>
    ));

    return <div className="bingo-card">{rows}</div>;
};

export default BingoCard;