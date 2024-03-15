
export const DateSticker = () => {
    
    const curr_time = new Date();
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