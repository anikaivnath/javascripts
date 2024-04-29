let Abc =document.getElementById('Itm');
let btn=document.getElementById('btn');
let store=document.getElementById('store');

btn.addEventListener('click',()=>
{
  let guess=(Abc.value);
  if(isNaN(guess)|| guess<1 || guess>100)
  {
    store.innerText="input 1 to 100";
 
  }
  let random= Math.floor(Math.random() * 100)+1;
  if(guess>random)
  {
    store.innerHTML= 'very high';
  }
  else{
    store.innerHTML='very low'
  }


});
