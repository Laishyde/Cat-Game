const cat = document.querySelector('.cat');
const pipe = document.querySelector('.pipe');

const jump = () =>{
    cat.classList.add('jump');
    setTimeout(()=>{
        cat.classList.remove('jump');
     

    }, 600);
}
const loop = setInterval(() =>{
    const pipePosition = pipe.offsetLeft;
    const catPosition = +window.getComputedStyle(cat).bottom.replace('px','');
  if(pipePosition <= 30 && pipePosition > 0 && catPosition < 110){
    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;
      cat.style.animation = 'none';
      cat.style.bottom = `${catPosition}px`;
      cat.style.width = '75px';
     cat.src = './assets/imagens/gato-bravo.gif'; 
      clearInterval(loop);
  }
  // setTimeout(function () {
  //   window.location.reload();

    
  // },10000);

},10);


document.addEventListener('click',jump);
