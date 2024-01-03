import React, { useEffect } from "react";
import axios from 'axios';
import BingoCard from "../components/BingoCard";
import OutgoingBallots from "../components/OutgoingBallots";
import RoomPlayers from "../components/RoomPlayers";


const BingoContainer = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-7 mt-5">
                    <div className="row">
                        <OutgoingBallots />
                    </div>
                    <div className="row mt-5">
                        <div className="col-8">
                            <BingoCard />
                        </div>
                    </div>

                </div>

                <div className="col-1 mt-5">
                    <button type="button" className="btn btn-success btn-lg position-absolute top-50 start-50 translate-middle">
                        ¡BINGO!
                    </button>
                </div>

                <div className="col-4 mt-5 position-relative">
                    <RoomPlayers />
                </div>
            </div>

        </div>
    );
};

export default BingoContainer;