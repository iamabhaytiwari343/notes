// src/Clock.js
// importing required modules
import React, { useState, useEffect } from 'react';
//clock arrow function
const Clock = () => {
    //use state hook use for state change in hook
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        //setInterval is a global function in JavaScript that takes two arguments: a function to execute and a time interval (in milliseconds).
        //It repeatedly calls the specified function with the given time interval between each execution until it is explicitly stopped.
        //intervalId is a unique identifier for the interval, which can later be used to stop the interval using clearInterval.
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);
        //clearInterval is used to stop a previously started interval created with setInterval. It takes the intervalId returned by setInterval as its argument.
        //When you call clearInterval(intervalId), it cancels the execution of the function specified in setInterval, effectively stopping the interval.
        return () => clearInterval(intervalId);
    }, []);

    const formattedTime = time.toLocaleTimeString();

    return (
        <div className="clock">
            <h2>Current Time</h2>
            <p>{formattedTime}</p>
        </div>
    );
};

export default Clock;
