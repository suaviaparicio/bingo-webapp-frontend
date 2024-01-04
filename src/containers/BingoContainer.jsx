import React, { useEffect, useContext } from "react";
import BingoCard from "../components/BingoCard";
import DrawnNumberDisplay from "../components/DrawnNumberDisplay";
import RoomPlayers from "../components/RoomPlayers";
// import { AuthContext } from "../AuthContext";

const wsUrl = process.env.REACT_APP_WS_URL;

const BingoContainer = () => {
    // const { authData, setAuthData } = useContext(AuthContext);
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-7 mt-5">
                    <div className="row">
                        <DrawnNumberDisplay websocketUrl={wsUrl} />
                    </div>
                    <div className="row mt-5">
                        <div className="col-8">
                            <BingoCard />
                        </div>
                    </div>

                </div>

                <div className="col-1 mt-5">
                    <button type="button" className="btn btn-warning btn-lg position-absolute top-50 start-50">
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