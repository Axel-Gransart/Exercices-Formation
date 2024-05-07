
let divButton = document.getElementById('divButton');
let bpNo = document.getElementById('no');
let bpYes = document.getElementById('yes');

let span = document.querySelector('span');
  
  bpYes.addEventListener('mouseover', ()=> {
    console.log('hover');
    let randomTop = Math.random() * 90;
    let randomLeft = Math.random() * 90;
    console.log(randomTop);
    console.log(randomLeft);
 
    bpYes.style.top = randomTop +'%';
    bpYes.style.left = randomLeft +'%';
  })

  bpNo.addEventListener('click', ()=> {
    divButton.style.display = 'none';
    span.innerHTML = "<p class='fw-bold text-danger'> Ok, ok, sympa !!! Je suis tout triste maintenant <i class='bi bi-emoji-tear'></i></p> "
  })

  bpYes.addEventListener('click', ()=> {
    divButton.style.display = 'none';
    span.innerHTML = "<p class='fw-bold text-success'>Hooooooo c'est trop mignon <i class='bi bi-emoji-heart-eyes'></i></p> "
  })

