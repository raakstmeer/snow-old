// drop down memu open and close

function menuShow(self) {
  let menuBox = document.querySelector('.menuList ul')

  self.addEventListener('click', function () {
    if ((self.classList.contains('fa-bars')) && !(menuBox.classList.contains('collapse'))) {
      self.classList.add('fa-xmark')
      self.classList.remove('fa-bars')
      menuBox.classList.add('collapse')
    } else if ((self.classList.contains('fa-xmark')) && (menuBox.classList.contains('collapse'))) {
      menuBox.classList.remove('collapse')
      self.classList.add('fa-bars')
      self.classList.remove('fa-xmark')
    }
  })
}

// contact form add javascript 

const fullName = document.querySelector("#name")
const email = document.querySelector("#email")
const number = document.querySelector("#number")
const comment = document.querySelector("#comment")
const submitButton = document.querySelector("#submitBtn")

submitButton.addEventListener('click',(e)=>{
  //name validation
  if((fullName.value == '')){
    fullName.classList.add('alert');
    e.preventDefault();
    alert('Name required')
  }else if((fullName.value.length < 3)){
    fullName.classList.add('alert');
    e.preventDefault();
    alert('Name must be three words')
  }else{
    fullName.classList.remove('alert')
  }
  fullName.addEventListener('keypress',function(){
    this.classList.remove('alert')
  })


  // email validation
  if(email.value == ''){
    email.classList.add('alert')
    e.preventDefault();
    alert('Email required')
  }else{
    email.classList.remove('alert')
  }
  email.addEventListener('keypress',function(){
    this.classList.remove('alert')
  })


  // phone number validation
  let numVal = String(number.value);
  let numLength = numVal.length;
  let numCode = numVal.slice(0,3)
  if(number.value === ''){
    number.classList.add('alert');
    e.preventDefault();
    alert('Number required')
  }else if((numCode != '018')&&(numCode != '017')&&(numCode != '013')&&(numCode != '016')&&(numCode != '019')&&(numCode != '014')&&(numCode != '015')){
    number.classList.add('alert')
    e.preventDefault();
    alert("Number code messing !")
  }else if(numLength !== 11){
    number.classList.add('alert');
    e.preventDefault();
    alert("Number must be 11 number")
  }else{
    number.classList.remove('alert')
  }
  number.addEventListener('keypress',function(){
    this.classList.remove('alert')
  })


  // text area validation 

  if(comment.value == ''){
    comment.classList.add('alert')
    e.preventDefault();
    alert('empty opinion box')
  }else if(comment.value.length < 15){
    e.preventDefault();
    comment.classList.add('alert')
    alert('opinion have must be 15 charecter...')
  }else{
    comment.classList.remove('alert')
  }
  comment.addEventListener('keypress',function(){
    this.classList.remove('alert')
  })

})

// scroll header section will be fixed and color change .
let mainHead = document.querySelector('#header');
let header = document.querySelector('.header');

window.addEventListener('scroll',function(){
  if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
    header.classList.add('scrollStick');
    mainHead.style.height = '100px';
  }else{
    header.classList.remove('scrollStick');
    mainHead.style.height = 'initial';
  }

  // go to top divition show 

  let gotoTop = document.querySelector('.gototop');
  if(document.body.scrollTop > 800 || document.documentElement.scrollTop > 800){
    gotoTop.style.opacity = '100';
    gotoTop.style.visibility = 'visible';
  }else{
    gotoTop.style.opacity = '0';
    gotoTop.style.visibility = 'hidden';
  }
})

// click any menu items then hide all menulist 

let allList = document.querySelectorAll('.menuList li')

allList.forEach(function(li){
  li.addEventListener('click',function(){
    let mainMenu = li.closest('.menuList ul');
    let barCross = document.querySelector('#cross svg')
    if(mainMenu.classList.contains('collapse')){
      mainMenu.classList.remove('collapse');
      barCross.classList.add('fa-bars');
    }
  })
})

// manual dark mode enable and disable

const darkModeEnabler = document.querySelector('.darkmode');
const mainHtml = document.querySelector('html');


darkModeEnabler.addEventListener('click',function(){
  if(!mainHtml.classList.contains('dark')){
    mainHtml.classList.add('dark');
    localStorage.setItem('colorScheme','dark')
  }else{
    mainHtml.classList.remove('dark')
    localStorage.setItem('colorScheme','')
  }
})
mainHtml.setAttribute('class',localStorage.getItem('colorScheme'));