
console.log("start");

function getData(id, callback) {
    setTimeout(() => {

        if(id === 2) {
            callback(new Error("wrong value"));
        }
        else {
            callback(id)
        }
    }, 3000);
}

getData(2, function(value) {
    console.log(value);
})


console.log("end");