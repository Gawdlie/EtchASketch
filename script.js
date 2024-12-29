let userInput;

const gridContainer = document.createElement("div");
const gridButtonContainer = document.createElement("div");
const gridButton = document.createElement("button");
const gridDivContainer = document.createElement("div");

document.body.appendChild(gridContainer);
document.body.appendChild(gridButtonContainer);
document.body.appendChild(gridButton);
document.body.appendChild(gridDivContainer);
document.body.style.cssText = "margin: 0px; padding: 0px;";

gridContainer.style.cssText = "padding: 10px; border: solid";
gridContainer.appendChild(gridButtonContainer);
gridContainer.appendChild(gridButton);
gridContainer.appendChild(gridDivContainer);

gridButtonContainer.appendChild(gridButton);

gridButtonContainer.style.cssText = "display: flex; justify-content: center; border: solid"

gridButton.style.cssText = "padding: 20px; border-radius: 20px;"
gridButton.textContent = "Click Me!";

// default grid
for(let i = 0; i < 16; i++) {
    const rowContainer = document.createElement("div");
    document.body.appendChild(rowContainer);
    for(let j = 0; j < 16; j++) {
        const newDiv = document.createElement("div");
        rowContainer.appendChild(newDiv);
        newDiv.style.cssText = "border: solid; padding: 18px;";
        
        newDiv.addEventListener("mouseover", () => {
            newDiv.style.backgroundColor = "red";
        });
    }
    rowContainer.style.cssText = "display: flex; justify-content: center; align-items: center;";
    gridContainer.appendChild(rowContainer);
}

gridButton.addEventListener("click", () => {
    userInput = prompt("Please choose number of divs for grid: ");
    createGrid(userInput);
});

function createGrid(userInput) {
    // empty out gridDivContainer
    while(gridDivContainer.firstChild) {
        gridDivContainer.removeChild(firstChild);
    }
}