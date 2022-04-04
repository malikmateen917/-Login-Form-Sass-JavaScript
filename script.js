const cta = document.querySelector('.cta');
const ctaBtn = document.querySelector('.cta__btn');
const shapes = document.querySelectorAll('.shape');

document.querySelector('.form').addEventListener('click',function(e){
  e.preventDefault();
});

const heading = [
  "Register Now",
  "Login to your account",
  "To get full access to our awesome product!",
  "You can do way more, when your a member. Register now to reap the benefits!",
];
let text = false;

ctaBtn.addEventListener('click', function(e){
  text = !text;
  cta.classList.toggle('showRegister');
  
  cta.children[0].innerText = text ? heading[0]:heading[1];
  cta.children[1].innerText = text ? heading[3]:heading[2];
  cta.children[1].style.top = text ? "40%": "40%";
  ctaBtn.children[0].innerText = text ? "Already have an Account?" : "Dont have an Account?";
  ctaBtn.children[1].innerText = text ? "Click here to login?" : "Click Here to Register?";
  
  shapes.forEach(function(shape){
    let x = [];
    let y = [];
    let Xa = 0;
    let Yb = 0;
    
    for(let i = 0; i < 5; i++){
      switch (i){
        case 0:
          Xa = Math.floor(Math.random()*75)+ 25;
          Yb = Math.floor(Math.random()*30);
          x.push(Xa);
          y.push(Yb);
          break;
        case 1:
          Xa = Math.floor(Math.random()*100)+ 60;
          Yb = Math.floor(Math.random()*45);
          x.push(Xa);
          y.push(Yb);
          break;
        case 2:
          Xa = Math.floor(Math.random()*100)+ 60;
          Yb = Math.floor(Math.random()*100)+ 60;
          x.push(Xa);
          y.push(Yb);
          break;
        case 3:
          Xa = Math.floor(Math.random()*45);
          Yb = Math.floor(Math.random()*100)+ 60;
          x.push(Xa);
          y.push(Yb);
          break;
        case 0:
          Xa = Math.floor(Math.random()*30);
          Yb = Math.floor(Math.random()*75)+ 25;
          x.push(Xa);
          y.push(Yb);
          break;
      }
    }
    shape.style.clipPath = `polygon(${x[0]}% ${y[0]}%,${x[1]}% ${y[1]}%,${x[2]}% ${y[2]}%,${x[3]}% ${y[3]}%,${x[4]}% ${y[4]}%)`;
    
  });
  
  e.preventDefault(); 
});