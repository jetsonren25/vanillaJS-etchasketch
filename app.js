let alphanum = 'abcdef0123456789'

let body = document.querySelector('body')

let container = document.createElement('div')
container.setAttribute('id','main-cont')


function createBlock(){
    for(let x = (16*16); x > 0; x--){
        let block = document.createElement('div')
        block.setAttribute('class','block')
        block.addEventListener('mouseover', (e) => e.target.textContent = 'yesh')
        block.addEventListener('mouseleave', (e) => e.target.textContent = '')
        container.appendChild(block)
    }
}

const randomColor = () => {

}


body.append(container)
createBlock()