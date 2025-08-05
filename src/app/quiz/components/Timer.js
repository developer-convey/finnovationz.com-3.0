import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const ProgressBarWithTimer = (props) => {

    const totalTimeInSeconds = props?.timer * 60; // 5 minutes
    const updateInterval = 1000; // 1 second
    const [elapsedTime, setElapsedTime] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);

            if (elapsedTime >= totalTimeInSeconds) {
                clearInterval(timer);
            }
        }, updateInterval);

        return () => {
            clearInterval(timer);
        };
    }, [elapsedTime, totalTimeInSeconds]);

    const remainingTimeInSeconds = totalTimeInSeconds - elapsedTime;
    const remainingMinutes = Math.max(0, Math.floor(remainingTimeInSeconds / 60));
    const remainingSeconds = Math.max(0, remainingTimeInSeconds % 60);
    const progress = (elapsedTime / totalTimeInSeconds) * 100;

    const consumedTimeInSeconds = Math.min(totalTimeInSeconds, elapsedTime);
    const consumedMinutes = Math.floor(consumedTimeInSeconds / 60);
    localStorage.setItem('totalSpenTime', consumedTimeInSeconds);
    if (remainingTimeInSeconds <= 0) {
        props.setIsTimeOut(true)
    }

    return (
        <>
            <div style={{ width: '60%', maxWidth: '120px', height: 'auto' }}>
                <CircularProgressbar value={progress}
                    text={`${remainingMinutes}:${remainingSeconds}`}

                    styles={buildStyles({
                        textColor: '#000', // Text color
                        pathColor: 'url(#linearGradient)', // Progress color
                    })}
                />
            </div>
            <svg style={{ position: 'absolute', width: '0', height: '0' }}>
                <defs>
                    <linearGradient id="linearGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="5.26%" style={{ stopColor: '#31C1B1' }} />
                        <stop offset="79.53%" style={{ stopColor: '#377FDB' }} />
                    </linearGradient>
                </defs>
            </svg>
        </>

    );
};
