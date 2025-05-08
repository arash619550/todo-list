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
        recycleBinLogo.src = "recycle bin.webp";
        recycleBinLogo.width = 25;
        recycleBinLogo.classList.add("recycle-img");
        li.appendChild(recycleBinLogo);
        recycleBinLogo.addEventListener("click", function () {
            ul.removeChild(li);
        });
        ul.appendChild(li);
        input.value = "";
        dish.push(li.innerText);
        console.log(dish);
    }
});
