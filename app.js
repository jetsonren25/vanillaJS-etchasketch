/**
 * yes. the idea is as follows : create a container with n rows. inside every row create n elements.  Remeber giving the container the correct dimentions so it's a square. Then you can experiment with flex.
if you still have problems or doubts you can ask any question
 */

let alphanum = 'abcdef0123456789'

let body = document.querySelector('body')

let btn = document.createElement('button')
btn.textContent = 'New Game'

let container = document.createElement('div')
container.setAttribute('id','container')


btn.addEventListener('click', () => {
    let input = prompt('How many squares per side?')
    removeBlock()
    addRow(parseInt(input))

})

for(let x = 10 ; x > 0 ; x--){
    let row = document.createElement('div')
    row.setAttribute('class','row')
    container.appendChild(row)
    for(let y = 10 ; y > 0 ; y--){
        let tile = document.createElement('div')
        tile.setAttribute('class','tile')
        tile.textContent = 'tile'
        row.appendChild(tile)
    }
}



// function addBlock(num=16){
//     for(num ; num > 0 ; num--){
//         let block = document.createElement('div')
//         block.setAttribute('class','block')
//         block.addEventListener('mouseover', (e) => e.target.style.backgroundColor = `${randomColor()}`)
//         block.addEventListener('mouseleave', (e) => {
//             e.target.style.transition = 'background-color 0.8s ease-in 1s'
//         })
//         row.appendChild(block)
//     }

// }

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


body.appendChild(btn)
body.append(container)
// addRow()
