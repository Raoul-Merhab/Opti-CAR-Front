import formatTimestamp from '@/helpers/formatTimestamp';

function formatData(data, XAxis, YAxis, current) {
    let newData = [];
    for (let i = 0; i < data.length; i++) {
        let obj = {};
        obj[XAxis] = formatTimestamp(data[i][XAxis],current);
        obj[YAxis] = data[i][YAxis];
        newData.push(obj);
    }
    return newData
}

export default formatData