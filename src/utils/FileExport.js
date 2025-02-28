const convertToCSV = (objArray) => {
    const array = objArray;
    let str = '';
    for (let i = 0; i < array.length; i++) {
        let line = '"';
        for (let index in array[i]) {
            if (line !== '"') line += '","';
            line += array[i][index];
        }
        str += line + '"\r\n';
    }
    return str;
};

const downloadCSV = (fileName, data) => {
    const csvData = new Blob([convertToCSV(data)], { type: 'text/csv' });
    const csvURL = URL.createObjectURL(csvData);
    const link = document.createElement('a');
    link.href = csvURL;
    link.download = fileName + `.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

export default downloadCSV;
