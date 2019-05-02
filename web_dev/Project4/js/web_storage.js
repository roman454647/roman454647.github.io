function counter() {
   if(localStorage.hits){
  localStorage.hits=Number(localStorage.hits)+1;
 }
else{
localStorage.hits=1;
}
document.getElementById('output').innerHTML= "You have clicked counter button for"+ " "+ localStorage.hits +" "+"times";
}
