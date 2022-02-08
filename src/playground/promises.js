const promise = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve('Thanks');
    }, 5000)
})
console.log('before');

promise.then((data) => {
    console.log(data)
})
console.log('after');

