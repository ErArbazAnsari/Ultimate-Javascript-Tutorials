//IIFE --> Immediate Invoked Function Expression
(function add(a, b) {
    console.log(a + b);
})(2, 5);

(function saySomething() {
    console.log("hey");
})();

(() => console.log("I am Arbaz"))();
