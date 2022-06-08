// new TypeIt("#formElement1", {
//     strings: "                                   Name",
//     waitUntilVisible: true,
//   }).go();

  var navigation = document.querySelector('.navigation');
  var toggle_ = document.querySelector('.banner__form');

  document.querySelector('.toggle').onclick = function() {
  
      navigation.classList.toggle('active');
      toggle_.classList.toggle('active');
  }
  
  
const element = document.querySelector('#formElement1');
const effect = new TypeIt(element, {
  strings: "This very long effect will be cancelled as soon as the user clicks in it!"
});

element.addEventListener('focus', () => {
  effect.reset();
});

element.addEventListener('blur', (e) => {
   if(!e.target.value.length) {
      effect.go();   
   }
});

effect.go();
