//Create 16x16 pattern of divs
function createDivs(){ 
        for (rowCount = 0; rowCount < 16; rowCount++) {
            for (colCount = 0; colCount < 16; colCount++) {
            const divContainer = document.querySelector('.grid-container');
              const gridPoint = document.createElement("div");
              gridPoint.setAttribute('class','grid-point')
              divContainer.appendChild(gridPoint);
              gridPoint.textContent = ` `
          //  }
          }
    }
}

createDivs();