

//Create 16x16 pattern of divs

function createDivs(){ 
        for (rowCount = 0; rowCount < 16; rowCount++) {
            for (colCount = 0; colCount < 16; colCount++) {
            const divContainer = document.querySelector('.grid-container');
              const gridPoint = document.createElement("div");
              gridPoint.setAttribute('class','grid-point')
              divContainer.appendChild(gridPoint);
              gridPoint.textContent = ` `
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

createDivs();
gridHighlight();