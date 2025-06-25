let body = document.querySelector('body')

let container = document.createElement('div')
container.setAttribute('id','main-cont')


function createBlock(){
    for(let x = 16; x > 0; x--){
        let block = document.createElement('div')
        block.setAttribute('class','block')
        block.textContent = 'block'
        container.appendChild(block)
    }
}


body.append(container)
createBlock()