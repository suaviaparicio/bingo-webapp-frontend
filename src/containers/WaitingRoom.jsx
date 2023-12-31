import React from "react";

const WaitingRoom = () => {
    return (
        <div className="container">
            <div className="row pt-5 pb-5">
                <h1 className="text-center">El juego iniciará en X segundos...</h1>
            </div>
            <div className="row">
                <div className="d-flex justify-content-center">
                    <div className="spinner spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
                <div className="pt-5">
                    <h3 className="text-center">No tardaremos, solo estamos esperando a que ingresen más usuarios...</h3>
                </div>

            </div>
        </div>
    );
};
export default WaitingRoom;