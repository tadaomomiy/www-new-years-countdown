import { useState, useEffect } from 'react';

import styles from './Counter.module.css'

export function Counter() {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const newYear = new Date("Januay, 01, 2024");

    function getNewYear(remainingDays) {
        if (remainingDays < 0){
            for (remainingDays; remainingDays < 0;) {
                remainingDays += 365
            }
            return remainingDays
        } else {
            return remainingDays
        }
    }

    const getTime = (newYear) => {
        const newYearFromNowInSeconds = Date.parse(newYear) - Date.now();
        const remainingDays = newYearFromNowInSeconds / (1000 * 60 * 60 * 24);
        const newYearFromNowInDays = getNewYear(remainingDays);

        const days = Math.floor(newYearFromNowInDays);
        const hours = Math.floor(newYearFromNowInDays * 24) % 24;
        const minutes = Math.floor(newYearFromNowInDays * 24 * 60) % 60;
        const seconds = Math.floor(newYearFromNowInDays *24 * 60 * 60) %60;

        function formatTime(time) {
            return time < 10 ? (`0${time}`) : time
        }

        setDays(formatTime(days));
        setHours(formatTime(hours));
        setMinutes(formatTime(minutes));
        setSeconds(formatTime(seconds));
    };

    useEffect(() => {
      const interval = setInterval(() => getTime(newYear), 1000);

      return () => clearInterval(interval);
    })

    const counters = [
      {
        id: 1,
        date: {
          type: 'Day',
          value: days,
        }
      },
      {
        id: 2,
        date: {
          type: 'Hour',
          value: hours,
        }
      },
      {
        id: 3,
        date: {
          type: 'Min',
          value: minutes
        }
      },
      {
        id: 4,
        date: {
          type: 'Sec',
          value: seconds
        }
      }
    ]

    return (
        <div>
            <div className={ styles.wrapper }>
                {counters.map(counter => {
                    return (
                        <div key={ counter.id } className={ styles.container }>
                            <p  >{ counter.date.value }</p>
                            <h1>{ counter.date.type }</h1>
                        </div>
                    )
                })}
            </div>
       </div>
    )
}