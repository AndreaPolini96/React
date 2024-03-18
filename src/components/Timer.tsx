import React, { useState, useEffect } from 'react';

export default function Timer() {

    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const intervalRef = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);
        return () => clearInterval(intervalRef);
    }, []);

    return (
        <div>
            <h2>Timer</h2>
            <p>Interval Value: {seconds}</p>
        </div>
    );

}
