function createDivs(squareCount){ 
        for (rowCount = 0; rowCount < squareCount; rowCount++) {
            for (colCount = 0; colCount < squareCount; colCount++) {
            const divContainer = document.querySelector('.grid-container');
              const gridPoint = document.createElement("div");
              gridPoint.setAttribute('class','grid-point')
              let gridPercent = 100/squareCount; 
              gridPoint.style.width = `calc(${gridPercent}% - 2px)`
              divContainer.appendChild(gridPoint);
           }
          }
    }
function gridHighlight(){
        // testing code
         // let mouseTargets = document.querySelectorAll("grid-point"); 
    
        // mouseTargets.forEach(el => el.addEventListener('mouseenter', event => {
        //     mouseTargets.classList.add('mouse-on');
        // }))
    
        // // mouseTargets.addEventListener('mouseleave', (e) => {
        // //     mouseTarget.classList.remove('mouse-on');
        // // })
    
    
    
            // if (etchElements[gridCount].classList.contains('mouse-on')) {
            //     etchElements[gridCount].addEventListener('mouseleave', (e) => {
            //     etchElements[gridCount].classList.remove('mouse-on');
            //     })
            // }
    
            // etchElements[gridCount].addEventListener('mouseleave', (e) => {
            //     etchElements[gridCount].classList.remove('mouse-on');
            // })
    
    
    
        let etchElements = document.getElementsByClassName('grid-point');
    
        for (let gridCount = 0; gridCount < etchElements.length; gridCount++) {
            etchElements[gridCount].addEventListener('mouseenter', (e) => {
                etchElements[gridCount].classList.add('mouse-on');
            })
    }
    }

function removeGrid() {
    let removeSquare = document.getElementsByClassName('grid-point');

    while(removeSquare[0]) { 
    let removeSquare = document.getElementsByClassName('grid-point');
        removeSquare[0].parentNode.removeChild(removeSquare[0]);
    }
}

function newGrid(){

    const customGrid = document.getElementById('custom-grid');
    customGrid.addEventListener('click', (event) => {
        let squareCount = Number(window.prompt(`Enter the Number of squares per side you'd like`, ""))
        if (squareCount > 100) { 
            alert('Please enter a number 100 or below'); 
            return;
        }
        removeGrid()
        createDivs(squareCount);
        gridHighlight();

        // need to adjust CSS to accomodate new grid and confirm removing the grid works
    //Need to do some math to adjust square size to fit pixels of container and set max input possible to 100 or less 
    })

    //To Do:

    // Fix code block to clear grid 
    // Adjust grid creation function to modify css style for .data-grid to adjust width and height:(calc) 
    // 100/number of squares per row - 1px ish

}


createDivs(16);
gridHighlight();
newGrid();
