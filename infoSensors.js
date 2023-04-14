import { fetchData } from "./apisFetch.js";


const info = await fetchData();

const allData = [...info];

const lastDataArray = [];

for (let i = 0; i < allData[0].length; i++) {
    const lastData = {
        created_at: allData[0][i].created_at,
        entry_id: allData[0][i].entry_id,
        field1: allData[0][i].field1,
        field2: allData[1][i].field2
        };
    for (let j = i + 1; j < allData[0].length; j++) {
        if (allData[0][j].created_at > lastData.created_at) {
            lastData.created_at = allData[0][j].created_at;
            lastData.entry_id = allData[0][j].entry_id;
            
        }
    }
    lastDataArray.push(lastData);
}


const lastData = lastDataArray[lastDataArray.length - 1]; // Get the last object in the array lastDataArray

console.log(lastData);

