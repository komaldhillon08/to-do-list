console.log("komal");
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
let btn = document.getElementById("add-btn");




btn.addEventListener('click', () => {

    if (inputBox.value === '') {
        alert("You must write something !");
    }
    else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        // create the span 
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        inputBox.value = '';
        saveData()
    }


});

listContainer.addEventListener('click', function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
    else if (e.target.tagName === "SPAN")
        e.target.parentElement.remove();
    saveData()

}, false)

// Load saved data from localStorage when the page loads
// one awy

/* window.addEventListener('DOMContentLoaded', () => {
    const savedData = localStorage.getItem("data");
    if (savedData) {
        listContainer.innerHTML = savedData;
    }
}); */

// second way
function showData() {
    listContainer.innerHTML = localStorage.getItem("data")
}
showData();


function saveData() {
    localStorage.setItem("data", listContainer.innerHTML)
}