

const printData = () => console.log("Displaying downloaded data");

function fetchData(callback){
    setTimeout(()=>{
        console.log('Fetched Data');
        callback();
    } , 3000);
}

fetchData(printData);




