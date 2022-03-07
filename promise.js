const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("data gannawa");
        resolve({data: "ravindu"});
        reject(new Error("mokak hari awlak"));
    }, 5000);
});

promise.then(result => {
    console.log(result);
}).catch(error => {
    console.log(error.message);
});