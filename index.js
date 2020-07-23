console.log("top");

console.log(new Date());

setTimeout(function() {
    console.log('2 seconds after')
    console.log(new Date());
}, 2000);

setImmediate(function() {
    for(let i = 0; i < 1e10; i++) {}
    // [...Array(1e8).keys()].forEach(function() {})
}, 0);

console.log("bottom");


