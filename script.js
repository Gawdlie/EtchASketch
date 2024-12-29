let userInput = 2;

const gridContainer = document.createElement("div");
const gridButtonContainer = document.createElement("div");
const gridButton = document.createElement("button");
const gridDivContainer = document.createElement("div");

document.body.appendChild(gridContainer);
document.body.appendChild(gridButtonContainer);
document.body.appendChild(gridButton);
document.body.appendChild(gridDivContainer);
document.body.style.cssText = "margin: 0px; padding: 0px;";

gridContainer.style.cssText = "padding: 10px;";
gridContainer.appendChild(gridButtonContainer);
gridContainer.appendChild(gridButton);
gridContainer.appendChild(gridDivContainer);

gridButtonContainer.appendChild(gridButton);

gridButtonContainer.style.cssText = "display: flex; justify-content: center; padding: 10px;";

gridButton.style.cssText = "padding: 10px; border-radius: 20px;";
gridButton.textContent = "Click Me!";

// default grid
for(let i = 0; i < 16; i++) {
    const rowContainer = document.createElement("div");
    document.body.appendChild(rowContainer);
    gridContainer.appendChild(rowContainer);
    gridDivContainer.appendChild(rowContainer);
    for(let j = 0; j < 16; j++) {
        const newDiv = document.createElement("div");
        rowContainer.appendChild(newDiv);
        newDiv.style.cssText = "border: solid; padding: 16px;";
        
        newDiv.addEventListener("mouseover", () => {
            newDiv.style.backgroundColor = generateRandomColor();
        });

        newDiv.addEventListener("mouseout", () => {
            newDiv.style.backgroundColor = generateRandomColor();
        });
    }
    rowContainer.style.cssText = "display: flex; justify-content: center; align-items: center;";
}

gridButton.addEventListener("click", () => {
    userInput = prompt("Please choose number of divs for grid (maximum 100): ");
    
    while(userInput > 100 || userInput < 2) {
        userInput = prompt("Please choose a valid number! ");
    }

    createGrid(parseInt(userInput));
});

function generateRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const randomColor = "rgb(" + r + ", " + g + ", " + b + ")";

    return randomColor;
}

function createGrid(userInput) {
    gridDivContainer.innerHTML = '';

    for(let i = 0; i < userInput; i++) {
        const rowContainer = document.createElement("div");
        document.body.appendChild(rowContainer);
        gridContainer.appendChild(rowContainer);
        gridDivContainer.appendChild(rowContainer);
        for(let j = 0; j < userInput; j++) {
            const newDiv = document.createElement("div");
            rowContainer.appendChild(newDiv);
            newDiv.style.cssText = "border: solid; padding: 26px;";
            
            newDiv.addEventListener("mouseover", () => {
                newDiv.style.backgroundColor = generateRandomColor();
            });

            newDiv.addEventListener("mouseout", () => {
                newDiv.style.backgroundColor = generateRandomColor();
            });
        }
        rowContainer.style.cssText = "display: flex; justify-content: center; align-items: center;";
    }
}