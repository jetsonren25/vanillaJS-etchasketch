let alphanum = 'abcdef0123456789'

let body = document.querySelector('body')

let container = document.createElement('div')
container.setAttribute('id','main-cont')


function createBlock(){
    for(let x = (16*16); x > 0; x--){
        let block = document.createElement('div')
        block.setAttribute('class','block')
        block.addEventListener('mouseover', (e) => e.target.style.backgroundColor = `${randomColor()}`)
        block.addEventListener('mouseleave', (e) => {
            e.target.style.transition = 'background-color 0.5s ease-in 0.8s'
            e.target.style.backgroundColor = ''
        })
        container.appendChild(block)
    }
}

const randomColor = () => {
    let color = ''
    for(let i = 0; i < 6; i++){
        color += alphanum[Math.floor(Math.random() * 16)]
    }
    return `#${color}`
}


body.append(container)
createBlock()
