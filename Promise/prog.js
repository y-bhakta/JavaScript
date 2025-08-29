let mypromise = new Promise((reslove, reject) => {
    console.log("hello 1");
    reslove("Success");
});

mypromise.then((msg) => {
    console.log(msg);
});

let mypromise1 = new Promise((reslove, reject) => {
    console.log("hello 2");
    reject("Error");
});

mypromise1.then((msg) => {
    console.log(msg);
}).catch((msg) => {
    console.error(msg);
});