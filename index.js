console.log(new Date());

setTimeout(function() {
    console.log(new Date());
}, 500);

console.time('theForbiddenLoop');

// just a poc... don't do that on real code
// but that code shows how to not block execution of others things
// see also: cluster, child process, worker threads
(function theForbiddenLoop(i) {
    if (i < 1e6) setImmediate(theForbiddenLoop, ++i);
    else console.timeEnd('theForbiddenLoop');
}(0));

console.log("bottom");
