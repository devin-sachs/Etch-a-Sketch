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

        for (i = 0; i < 16; i++) {
            for (j = 0; j < 16; j++) {
            const divContainer = document.querySelector('.grid-container');
              const row = document.createElement("div");
              divContainer.appendChild(row);
              row.textContent = `a`
          //  }
          }
    }
}

createDivs();