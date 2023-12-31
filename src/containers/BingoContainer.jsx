import React from "react";
import BingoCard from "../components/BingoCard";

const GameBingo = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-8 mt-5">
                    <div className="row">
                        <h4 className="">Balotas salientes</h4>
                        <h2 className="">x, x, x...</h2>
                    </div>
                    <div className="row mt-5">
                        <div className="col-8">
                            <BingoCard/>
                        </div>
                        <div className="col-4">
                            <button type="button" className="btn btn-success btn-lg">BINGO!</button>
                        </div>
                    </div>

                </div>
                <div className="col-4 mt-5">
                    <h2>Jugadores en la sala</h2>
                </div>
            </div>

        </div>
    );
};

export default GameBingo;