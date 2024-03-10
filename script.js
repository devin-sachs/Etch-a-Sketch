//Create 16x16 pattern of divs
function createDivs(){ 
    //divCounter = 0;
    //for(divCounterY = 0; divCounterY <= 16; divCounterY++ ){ 
        // const rowDiv = document.createElement('div');
        // rowDiv.setAttribute('class', 'grid-container')
        // rowDiv.textContent = 'a';
        // document.body.appendChild(rowDiv); 
        
        // for(divCounterX =0; divCounterX <=16; divCounterX++){ 
        //     const colDiv = document.createElement('div');
        //     colDiv.setAttribute('class', 'grid-container')
        //     colDiv.textContent = 'b';
        //     document.body.appendChild(colDiv); 
        // }

        //querySelector('grid-container')

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