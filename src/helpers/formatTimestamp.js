function formatTimestamp(timeStamp, format) {
    let time = new Date(timeStamp);
    let result = "";
    switch (format) {
        case "Live":
            result = `${String(time.getUTCHours()).padStart(2, '0')}:${String(time.getUTCMinutes()).padStart(2, '0')}:${String(time.getUTCSeconds()).padStart(2, '0')}`;
            break;
        case "Last hour":
            result = `${String(time.getUTCHours()).padStart(2, '0')}:${String(time.getUTCMinutes()).padStart(2, '0')}`
            break;
        case "Last 24 hours":
            result = `${String(time.getUTCHours()).padStart(2, '0')}h`
            break;
        case "Last 7 days":
            const days = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];
            result = `${days[time.getDay()]}`
            break;
        case "Last 30 days":
            result = `${time.getUTCDate()}/${time.getUTCMonth()+1}`
            break;
        default:
            result = timeStamp;
            break;
    }
    return result;
}

export default formatTimestamp