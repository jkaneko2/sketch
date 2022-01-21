let gridSize = 16;
let selection;


const container = document.querySelector('#container');

function rowCreate () {
    for (let i = 0; i < gridSize; i++) {
        let row = document.createElement('div');
        let rowName = 'row'+ (i + 1);
        row.classList.add('gridRow');
        row.setAttribute('id', rowName);
        //row.textContent = 'test';
        container.appendChild(row);
    }
}

function gridBoxCreate () {
    let allRow = document.querySelectorAll(".gridRow");
    allRow.forEach((gridrow) => {
        for (let i =0; i < allRow.length; i++) {
            let column = document.createElement('div');
            column.classList.add('gridBox');
            //column.textContent = i;
            allRow[i].appendChild(column);
        }
    });
}

function layoutGridBox () {
    rowCreate();
    gridBoxCreate();
}

function colorGridBox() {
    selection = document.querySelectorAll('.gridBox');
    selection.forEach((gridBox) => {
        gridBox.addEventListener('mouseover', () => {
        gridBox.classList.add('hovered');
        });
    });
    return selection;
}

layoutGridBox();
colorGridBox();

const button = document.createElement('button');
button.classList.add('button');
button.textContent = 'Reset';
document.getElementById('header').appendChild(button);

function removeGridRow () {
    console.log('test');
    let removal = document.querySelectorAll('.gridRow');
    removal.forEach((gridrow) => {
        for (let i =0; i < removal.length; i++) {
            removal[i].remove();
        }
    });
}


button.addEventListener(('click'), () => {
    selection.forEach((gridBox) => {
    gridBox.classList.remove('hovered');
    });
    gridSize = prompt('Please enter grid size', 10);
    removeGridRow();
    layoutGridBox();
    colorGridBox();
});