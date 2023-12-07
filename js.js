let _li = document.querySelectorAll('#menu>li')
let _p = document.querySelectorAll('#box>p')
function func1(e){
    _li.forEach((val)=>{
        val.style.backgroundColor = 'black'
    })
    e.target.style.backgroundColor ='gray'
    let valuee = e.target.getAttribute('data-value')
    _p.forEach((val)=>{
        val.style.opacity = 0
    })
    document.getElementById(valuee).style.opacity = 1
}