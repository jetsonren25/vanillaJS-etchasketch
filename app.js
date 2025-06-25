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
    setTimeout(addBlock(parseInt(input),1000))
})

function addBlock(num=16){
    for(let x = (num*num); x > 0; x--){
        let block = document.createElement('div')
        block.setAttribute('class','block')
        block.addEventListener('mouseover', (e) => e.target.style.backgroundColor = `${randomColor()}`)
        block.addEventListener('mouseleave', (e) => {
            e.target.style.transition = 'background-color 0.8s ease-in 1s'
            e.target.style.backgroundColor = ''
        })
        container.appendChild(block)
    }

}

function removeBlock(){
    let blockArr = document.querySelectorAll('.block')
    blockArr.forEach(b => container.removeChild(b))
}

const randomColor = () => {
    let color = ''
    for(let i = 0; i < 6; i++){color += alphanum[Math.floor(Math.random() * 16)]}
    return `#${color}`
}


body.appendChild(btn)
body.append(container)
addBlock()
