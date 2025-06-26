let body = document.querySelector('body')

let alphanum = 'abcdef0123456789'

let mainContainer = document.createElement('div')
mainContainer.setAttribute('id','main-container')

let uiContainer = document.createElement('div')
uiContainer.setAttribute('id','ui-container')

let btnContainer = document.createElement('div')
btnContainer.setAttribute('id','btn-container')

let titleContainer = document.createElement('div')
titleContainer.setAttribute('id','title-container')

let title = document.createElement('p')
title.textContent = 'Etch-a-Sketch'

let sketchContainer = document.createElement('div')
sketchContainer.setAttribute('id','sketch-container')

let input = document.createElement('input')
input.setAttribute('id','input')
input.setAttribute('type','number')




let newGameBtn = document.createElement('button')
newGameBtn.textContent = 'New Game'

let submitBtn = document.createElement('button')
submitBtn.textContent = 'Sketch'

submitBtn.addEventListener('click', () => {
    removeBlock()
    addTiles(parseInt(document.querySelector('#input').value))
})

function addTiles(num=16){
    for(let x = num ; x > 0 ; x--){
        let row = document.createElement('div')
        row.setAttribute('class','row')
        sketchContainer.appendChild(row)
        for(let y = num ; y > 0 ; y--){
            let tile = document.createElement('div')
            tile.setAttribute('class','tile')
            row.appendChild(tile)
        }
    }
}

function removeBlock(){
    let blockArr = document.querySelectorAll('.block')
    let rowArr = document.querySelectorAll('.row')
    rowArr.forEach(r => sketchContainer.removeChild(r))
    blockArr.forEach(b => sketchContainer.removeChild(b))
}

const randomColor = () => {
    let color = ''
    for(let i = 0; i < 6; i++){color += alphanum[Math.floor(Math.random() * 16)]}
    return `#${color}`
}


body.appendChild(mainContainer)

mainContainer.appendChild(uiContainer)
mainContainer.appendChild(sketchContainer)

uiContainer.appendChild(btnContainer)
uiContainer.appendChild(titleContainer)

titleContainer.appendChild(title)

btnContainer.appendChild(newGameBtn)
btnContainer.appendChild(submitBtn)
btnContainer.appendChild(input)





addTiles()
