let body = document.querySelector('body')

let alphanum = 'abcdef0123456789'

let mainContainer = document.createElement('div')
mainContainer.setAttribute('id','main-container')

let uiContainer = document.createElement('div')
uiContainer.setAttribute('id','ui-container')

let container = document.createElement('div')
container.setAttribute('id','sketch-container')

let input = document.createElement('input')

let newGameBtn = document.createElement('button')
newGameBtn.textContent = 'New Game'

let resetBtn = document.createElement('button')



newGameBtn.addEventListener('click', () => {
    let input = prompt('How many?')
    removeBlock()
    addTiles(parseInt(input))
})

function addTiles(num=16){
    for(let x = num ; x > 0 ; x--){
        let row = document.createElement('div')
        row.setAttribute('class','row')
        container.appendChild(row)
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
    rowArr.forEach(r => container.removeChild(r))
    blockArr.forEach(b => container.removeChild(b))
}

const randomColor = () => {
    let color = ''
    for(let i = 0; i < 6; i++){color += alphanum[Math.floor(Math.random() * 16)]}
    return `#${color}`
}


body.appendChild(mainContainer)

mainContainer.appendChild(uiContainer)
mainContainer.appendChild(container)

uiContainer.appendChild(newGameBtn)
uiContainer.appendChild(input)

addTiles()
