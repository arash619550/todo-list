const input = document.querySelector("input");
const button = document.querySelector("button");
const ul = document.querySelector(".task-list");
const dish = [];
button.addEventListener("click", function (event) {
    event.preventDefault();
    if (input.value !== "") {
        const li = document.createElement("li");
        li.innerText = input.value;
        li.classList.add("style");
        const recycleBinLogo = document.createElement("img");
        const tick = document.createElement("img");
        recycleBinLogo.src = "assets/images/recycle bin.webp";
        tick.src = "assets/images/tick.webp";
        tick.width = 25;
        recycleBinLogo.width = 25;
        recycleBinLogo.classList.add("recycle-tick-img");
        recycleBinLogo.classList.add("recycle-tick-img");
        li.append(recycleBinLogo, tick);
        recycleBinLogo.addEventListener("click", function () {
            ul.removeChild(li);
        });
        tick.addEventListener("click", function () {
            li.style.color = "green";
            li.style.textDecoration = "line-through";
        });
        ul.appendChild(li);
        input.value = "";
        dish.push(li.innerText);
        console.log(dish);
    }
});
