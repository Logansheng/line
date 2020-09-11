const divScreen = document. querySelector('#screen')
const btnCreateNumber = document.querySelector('#createNumber')
const btnCallNumber = document.querySelector('#callNumber')
spanNewNumber = document.querySelector('#newNumber')
const spanQueue = document.querySelector('#queue ')

let n =0
let queue =[]


btnCreateNumber.onclick = () =>{
    n= n + 1
    queue.push.call(queue,n)
    spanNewNumber.innerText = n
    spanQueue.innerText = JSON.stringify(queue)
}
btnCallNumber.onclick = () =>{
    if(queue.length ===0){
        return
    }
    const m = queue.shift.call(queue)
    divScreen.innerText = `${m} 号傻逼，到你吃饭了`
    spanQueue.innerText = JSON.stringify(queue)
    
}