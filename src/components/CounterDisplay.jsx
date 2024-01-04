import React, {useState, useEffect} from "react";

const CounterDisplay = ({websocketUrl}) => {
    const [counter, setCounter ] = useState(null);

    useEffect(() => {
        const ws = new WebSocket(websocketUrl);

        ws.onopen = () => {
            console.log('Connected to WebSocket');
        };

        ws.onmessage = (event) => {
            const message = JSON.parse(event.data);
            if (message.type === 'COUNTER') {
                setCounter(JSON.parse(message.data));
            }
        };

        ws.onerror = (error) => {
            console.log('WebSocket error:', error);
        };

        ws.onclose = () => {
            console.log('WebSocket connetcion closed');
        };

        return () => {
            ws.close();
        };
    }, [websocketUrl]);

    return (
        <div className="container">
            {counter !== null ? (
                <h1 className="text-center">
                    El juego iniciará en {counter} segundos...
                </h1>
            ) : (
                <h1>Contador iniciando...</h1>
            )}
        </div>
    );
};
export default CounterDisplay;
