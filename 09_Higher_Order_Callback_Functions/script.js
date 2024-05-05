// Higher order functions in javascript

function add(a, b, cb) {
    let result = a + b;
    cb(result);
}

add(2, 4, (result) => {
    console.log(result);
});
