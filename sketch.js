const body = document.querySelector("body");


const container = document.querySelector("#container");

const button = document.createElement("button");
button.textContent = "Initialize Grid";
body.insertBefore(button, container);
button.addEventListener("click", () => {
let sides = prompt("Enter the number of squares per side:")
if (sides > 0 && sides <= 100) {
    container.removeChild(container.firstChild);
    printGrid(sides);
}
else {
    alert("Please input a number between 1 and 100");
}
});

function printGrid(sides) {
    const HEIGHT = 750;
    const grid = document.createElement("div");
    grid.style
    grid.style.border = "2px solid black"
    grid.style.width = `${HEIGHT}px`
    grid.style.height = `${HEIGHT}px`
    grid.style.margin = "auto"
    for (let i = 0; i < sides; i++) {
        const row = document.createElement("div")
        row.style.display = "flex";
        row.style.alignContent = "center";
        row.style.justifyContent = "center";
        for (let c = 0; c < sides; c++) {
            let randomNumberRed = Math.floor(Math.random() * 255);
            let randomNumberGreen = Math.floor(Math.random() * 255);
            let randomNumberBlue = Math.floor(Math.random() * 255);
            const div = document.createElement("div")
            div.style.width = `${HEIGHT / sides}px`;
            div.style.height = `${HEIGHT / sides}px`;
            div.style.backgroundColor = "rgb(245,255,255)";
            let opacity = 0.1
            div.addEventListener("mouseenter", () => {
                div.style.backgroundColor = `rgb(${randomNumberRed},${randomNumberGreen},${randomNumberBlue})`
                div.style.opacity = `${opacity}`;
                opacity += 0.1
            });
            row.appendChild(div);
        }
        grid.appendChild(row);
    }
    container.appendChild(grid);
}

