let alphanum = 'abcdef0123456789'

let body = document.querySelector('body')

let btn = document.createElement('button')
btn.textContent = 'New Game'
btn.setAttribute('id','btn')

let container = document.createElement('div')
container.setAttribute('id','main-cont')


btn.addEventListener('click', () => {
    let input = prompt('How many squares per side?')
    removeBlock()
    addRow(parseInt(input))
    // addBlock(parseInt(input))
})

function addRow(num=16){
    for(num ; num > 0; num--){
        let row = document.createElement('div')
        row.setAttribute('class', 'row')
        container.appendChild(row)
    }
}

function addBlock(num=16){
    for(let x = (num*num); x > 0; x--){
        let block = document.createElement('div')
        block.setAttribute('class','block')
        block.addEventListener('mouseover', (e) => e.target.style.backgroundColor = `${randomColor()}`)
        block.addEventListener('mouseleave', (e) => {
            e.target.style.transition = 'background-color 0.8s ease-in 1s'
        })
        container.appendChild(block)
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


body.appendChild(btn)
body.append(container)
addRow()
