let randomNumber1=Math.floor(Math.random()*6)+1
 console.log(randomNumber1)
 let randomImg="dice"+randomNumber1+".png"
 console.log(randomImg)
 let randomImgSourse="./images/"+randomImg;
 var image1=document.querySelectorAll("img")[0];
 image1.setAttribute("src", randomImgSourse);

//second dice
let randomNumber2=Math.floor(Math.random()*6)+1
 console.log(randomNumber2)
 let randomImg2="dice"+randomNumber2+".png"
 let randomImgSourse2="./images/"+randomImg2;
 var image2=document.querySelectorAll("img")[1];
 image2.setAttribute("src", randomImgSourse);


 if(randomNumber1>randomNumber2)
 {
    document.querySelector('h1').innerHTML='Player 1 Wins!'
 }
 else if (randomNumber1<randomNumber2)
 {
     document.querySelector('h1').innerHTML='Player 2 Wins!'
 }
else{
    document.querySelector('h1').innerHTML='It is a Draw';
}

