// How to perform independent promises same time - Promise.All()

const gossip = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("gossip gannawa");
        resolve({gossip: [1, 2, 3, 4, 5]});
    }, 3000);
});

const videos = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("videos gannawa");
        resolve({videos: [1, 2, 3]});
    }, 6000);
});

//give promisses in the array
//we only get result both promisses are resolve 
Promise.all([gossip, videos]).then(result => {
    console.log(result);
});