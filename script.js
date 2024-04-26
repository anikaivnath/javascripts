let Time=()=>{
    let time=document.getElementById('real');
    time.innerText=` (${new Date().toLocaleTimeString()})`;

}
setInterval(Time,1000)
let arr=[];
let btn =document.getElementById('btn');
btn.addEventListener('click',()=> {

    let p= document.createElement('p');
    p.innerText=`(${new Date().toLocaleTimeString()}) {1st One}`;
    document.body.appendChild(p);
})
   

    


