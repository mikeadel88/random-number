
let clickMe=document.querySelector(".clickMe")
let resetMe=document.querySelector(".resetMe")
let output=document.querySelector(".output")
const numberArr=document.querySelector(".numberArr")
let arr=new Set()
let count=0
// let maxNum=document.querySelector(".maxNum").value
// let minNum=document.querySelector(".minNum").value
clickMe.addEventListener("click",()=>{
    let maxNum=document.querySelector(".maxNum").value
    let minNum=document.querySelector(".minNum").value
    let randValue= Math.floor(Math.random() * (maxNum - minNum + 1) + minNum) ;
    arr.add(randValue)
    const myInterval=setInterval(()=>{
        output.innerHTML= Math.floor(Math.random() * (maxNum - minNum + 1) + minNum) ;
        count++     
        if(count==5){
            clearInterval(myInterval)
            output.innerHTML= randValue ;
            numberArr.innerHTML=[...arr]
            count=0
        }
    },100)
   

})
resetMe.addEventListener("click",()=>{
    output.innerHTML="0"
    arr.clear()
    numberArr.innerHTML= "" ;

})


