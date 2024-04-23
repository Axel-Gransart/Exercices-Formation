

let email = document.querySelector('#emailForm');
let email2 = document.querySelector('#emailForm2');
let textVerif = document.querySelector('#emailForm + small');
let textVerif2 = document.querySelector('#emailForm2 + small');
let form = document.querySelector("form");
let emailValue = email.value.trim();
let filtreMail = /.+@.+\..+/;

form.addEventListener('submit', (e)=> {
      e.preventDefault(); 
      controlMail();
      
    })

function formVerif() {
 form.submit();
}

email.addEventListener("input", controlMail);
email.addEventListener("change", razInput);
email2.addEventListener("input", controlMail2);
email2.addEventListener("change", razInput2);

function controlMail(){		
  console.log(filtreMail.test(this.value));
  if (filtreMail.test(this.value) == false) {
    this.classList.add("notGood");
    this.classList.remove("good");
    textVerif.innerHTML = 'Please check your email';
  }else{
    this.classList.add("good");
    this.classList.remove("notGood");
    textVerif.innerHTML = 'Your email is OK';
  }
};

function razInput() {
  if (this.value.trim() == "") {
    this.classList.remove("good");
    this.classList.remove("notGood");
    textVerif.innerHTML = '';
  }
}

function controlMail2(){		
  console.log(filtreMail.test(this.value));
  if (filtreMail.test(this.value) == false) {
    this.classList.add("notGood");
    this.classList.remove("good");
    textVerif2.innerHTML = 'Please check your email';
  }else{
    this.classList.add("good");
    this.classList.remove("notGood");
    textVerif2.innerHTML = 'Your email is OK';
  }
};


function razInput2() {
  if (this.value.trim() == "") {
    this.classList.remove("good");
    this.classList.remove("notGood");
    textVerif2.innerHTML = '';
  }
}