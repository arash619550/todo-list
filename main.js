const input = document.querySelector("input");
const button = document.querySelector("button");
const ul = document.querySelector(".task-list");
const recycleBinLogo = document.createElement("img");
recycleBinLogo.src = "recycle bin.webp";
recycleBinLogo.width = 25;
button.addEventListener("click", function (event) {
    event.preventDefault();
    if (input.value !== "") {
        const li = document.createElement("li");
        li.innerText = input.value;
        li.classList.add("style");
        li.addEventListener("click", function () {
            ul.removeChild(li);
        });
        ul.appendChild(li);
        ul.appendChild(recycleBinLogo);
        recycleBin();
        input.value = "";
    }
});


function recycleBin() {

}