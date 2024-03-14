import { useState, useEffect } from "react";

export const DateSticker = () => {

    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date());
        }, 60*1000);
        return () => {
            clearInterval(timer);
        }
    }, []);
    
    const curr_time = date;
    const timestamp = Intl.DateTimeFormat('en-DE', {
        year: 'numeric', 
        month: '2-digit',
        day: '2-digit', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit'
    }).format(curr_time);

    return timestamp;
}