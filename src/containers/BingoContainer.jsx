import React, { useEffect, useContext } from "react";
import BingoCard from "../components/BingoCard";
import DrawnNumberDisplay from "../components/DrawnNumberDisplay";
import RoomPlayers from "../components/RoomPlayers";
import { Navigate } from "react-router-dom";
// import { AuthContext } from "../AuthContext";

const wsUrl = process.env.REACT_APP_WS_URL;

const BingoContainer = () => {
    const endpointUrl = process.env.REACT_APP_ENDPOINT_URL;
    // const { authData, setAuthData } = useContext(AuthContext);

    const handleCheckWin = async () => {
        try {
            const response = await fetch(`${endpointUrl}/api/check-win`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                Navigate('/home/game-finished');
            } else {
                console.log('Error finishing game')
            }
        } catch (error) {
            console.error('Error finishing game:', error);
        }
    };
    
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
                    <button type="button" className="btn btn-warning btn-lg position-absolute top-50 start-50" onClick={handleCheckWin}>
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