const gridContainer = document.createElement("div");

document.body.appendChild(gridContainer);

for(let i = 0; i < 16; i++) {
    const rowContainer = document.createElement("div");
    document.body.appendChild(rowContainer);
    rowContainer.textContent = "0";
    for(let j = 0; j < 16; j++) {
        const newDiv = document.createElement("div");
        rowContainer.appendChild(newDiv);
        newDiv.textContent = "0";
    }
    rowContainer.style.cssText = "display: flex; justify-content: center; border: solid;";
}
gridContainer.style.cssText = "display: flex; margin: 0px; padding: 0px;";