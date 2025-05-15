const input = document.querySelector("input");
const button = document.querySelector(".button");
const ul = document.querySelector(".task-list");
let tasks = [];

button.addEventListener("click", event => {
    event.preventDefault();
    if (input.value != "") {
        const objTask = { task: input.value, done: false };
        tasks.push(objTask);
        input.value = "";
        render();
    }
})

const render = () => {
    ul.innerHTML = tasks.map(function (item, index) {
        return `<li class="style ${item.done ? "done" : ""}" dir="rtl" data-index=${index}>
            <img src="assets/images/tick.webp" width="25px" onclick="tickFunction(${index})">
            <img src="assets/images/recycle bin.webp" width="25px" onclick="deleteFunction(${index})">
            ${item.task}
        </li>`;
    }).join("");
}


function tickFunction(index) {
    tasks[index].done = !tasks[index].done;;
    const li = ul.querySelector(`li[data-index="${index}"]`);
    render();
}

const deleteFunction = index => {
    tasks.splice(index, 1);
    render();
}

