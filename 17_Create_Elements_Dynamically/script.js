// Creating element in dom dynamically
const myBtn = document.getElementById("myButton");
const myContainer = document.getElementById("container");

let counter = 0;
myBtn.addEventListener("click", () => {
    const el = document.createElement("h1");
    const li = document.createElement("li");
    li.innerHTML = counter++;
    el.innerHTML = "Arbaz Ansari";
    // myContainer.innerHTML = "<h3>Yep, You Won this Game.</h3>";
    console.log("btn clicked");
    myContainer.appendChild(el) + myContainer.append(li);
});
