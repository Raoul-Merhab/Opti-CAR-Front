function formatTimestamp(timeStamp, format) {
    let time = new Date(timeStamp);
    let result = "";
    switch (format) {
        case "Live":
            result = `${String(time.getUTCHours() + 1).padStart(2, '0')}:${String(time.getUTCMinutes()).padStart(2, '0')}:${String(time.getUTCSeconds()).padStart(2, '0')}`;
            break;
        case "Last 30 minutes":
            result = `${String(time.getUTCHours() + 1).padStart(2, '0')}:${String(time.getUTCMinutes()).padStart(2, '0')}:${String(time.getUTCSeconds()).padStart(2, '0')}`
            break;
        case "Last hour":
            result = `${String(time.getUTCHours() + 1).padStart(2, '0')}:${String(time.getUTCMinutes()).padStart(2, '0')}`
            break;
        case "Last 12 hours":
            result = `${String(time.getUTCHours() + 1).padStart(2, '0')}:${String(time.getUTCMinutes()).padStart(2, '0')}`
            break;
        case "Last 24 hours":
            result = `${String(time.getUTCHours() + 1).padStart(2, '0')}:${String(time.getUTCMinutes()).padStart(2, '0')}`
            break;
        default:
            result = timeStamp;
            break;
    }
    return result;
}

export default formatTimestamp