const input = document.querySelector("input");
const button = document.querySelector("button");
const ul = document.querySelector(".task-list");
const tasks = [];

button.addEventListener("click", function (event) {
    event.preventDefault();
    if (input.value !== "") {
        const task = { task: input.value, done: false };
        tasks.push(task);
        const li = document.createElement("li");
        li.innerText = input.value;
        li.classList.add("style");
        const recycleBinLogo = document.createElement("img");
        recycleBinLogo.src = "assets/images/recycle bin.webp";
        recycleBinLogo.width = 25;
        recycleBinLogo.classList.add("recycle-tick-img");
        const tick = document.createElement("img");
        tick.src = "assets/images/tick.webp";
        tick.width = 25;
        tick.classList.add("recycle-tick-img");
        li.append(recycleBinLogo, tick);
        ul.appendChild(li);
        recycleBinLogo.addEventListener("click", function () {
            ul.removeChild(li);
            const index = tasks.indexOf(task);
            if (index !== -1) {
                tasks.splice(index, 1);
            }
            console.log(tasks);
        });
        tick.addEventListener("click", function () {
            li.style.color = "green";
            li.style.textDecoration = "line-through";
            task.done = true;
        });
        input.value = "";
    }
});
