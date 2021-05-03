



//////////////////////////////////////////////////////////////////////////////
const gridContainer = document.querySelector('.grid_container');
let box = document.createElement('div');
box.style.gridTemplateRows = window.getComputedStyle(gridContainer, null).getPropertyValue('grid-template-rows')
box.style.gridTemplateColumns = window.getComputedStyle(gridContainer, null).getPropertyValue('grid-template-columns')



let Nc = box.style.gridTemplateColumns.split(' ').length;
let Nr = box.style.gridTemplateRows.split(' ').length;



for (let i = 0; i < Nc * Nr; i++) {
    let d = document.createElement("div");
    d.classList = 'box'
    gridContainer.appendChild(d);
}


const boxes = document.querySelectorAll(".box");

boxes.forEach(box => {
    box.addEventListener('click', (elm) => {
        const TargetElement = elm.target;
        GetGridElementsPosition([...TargetElement.parentNode.children].indexOf(TargetElement), TargetElement)

    })
})


function GetGridElementsPosition(index, element) {

    const colCount = Nc;
    const rowPosition = Math.floor(index / colCount) + 1;
    const colPosition = index % colCount + 1;
    markBox(rowPosition, colPosition, element);


}


function markBox(rowPosition, colPosition, element) {

    let elementWidth = element.offsetWidth
    let elementHeight = element.offsetHeight
    console.log(elementWidth, elementHeight);
    let gridContainer2 = document.querySelector(".grid_container2");
    if (gridContainer2) gridContainer2.remove();

    gridContainer2 = document.createElement('div');
    gridContainer2.classList = ('grid_container2')
    gridContainer2.style.gridTemplateRows = `repeat(${rowPosition} ,${elementHeight}px)`
    gridContainer2.style.gridTemplateColumns = `repeat(${colPosition} , ${elementWidth}px )`
    document.body.appendChild(gridContainer2);


    for (let i = 0; i < rowPosition * colPosition; i++) {
        let newBox = document.createElement("div");
        newBox.classList.toggle('box2')
        gridContainer2.appendChild(newBox);

    }
    // const result = document.querySelector('.result')
    const coords = document.querySelector('#coord')
    const total = document.querySelector('#total')
    coords.innerText = `${colPosition} , ${rowPosition}`
    total.innerText = `${rowPosition * colPosition}`


}




///////////////////////////////////////////////////////////////////////////

