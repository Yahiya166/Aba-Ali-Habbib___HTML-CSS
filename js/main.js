AOS.init({
  offset: 100,
  duration: 1000,
});

// -------------------------banner Text-----------------------------
$(document).ready(function () {
  $(".menu__nav li:has(ul)").addClass("actives");
});

$(document).ready(function () {
  $(".menu__nav li ul li:has(ul)").addClass("activeness");
});

$(document).ready(function () {
  $(".all2").owlCarousel({
    loop: true,
    navigation: true,
    autoplay: false,
    autoplayTimeout: 9000,
    smartSpeed: 700,
    autoplayHoverPause: false,
    items: 1,
    mousewheel: false,
    dots: false,
    animateIn: "animate__fadeIn", // add this
    animateOut: "animate__fadeOut ", // and this
  });
});
$(".banner__btnright").click(function () {
  var owl = $(".all2");
  owl.trigger("next.owl.carousel"), [1500];
});
$(".banner__btnleft").click(function () {
  var owl = $(".all2");
  owl.trigger("prev.owl.carousel"), [1500];
});

$(document).ready(function () {
  $(".all3").owlCarousel({
    loop: false,
    navigation: false,
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    items: 6,
    mousewheel: false,
    dots: false,
    slideBy: 1,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      200: {
        items: 1,
        nav: false,
      },
      300: {
        items: 1,
        nav: false,
      },
      400: {
        items: 1,
        nav: false,
      },
      700: {
        items: 1,
        nav: false,
      },
      900: {
        items: 3,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
        loop: true,
      },
    },
  });
});
$(".tab__btnright").click(function () {
  var owl = $(".all3");
  owl.trigger("next.owl.carousel"), [1500];
});
$(".tab__btnleft").click(function () {
  var owl = $(".all3");
  owl.trigger("prev.owl.carousel"), [1500];
});

$(document).ready(function () {
  $(".all1").owlCarousel({
    loop: true,
    navigation: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    items: 6,
    mousewheel: false,
    dots: true,
    slideBy: 1,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      200: {
        items: 1,
        nav: false,
      },
      300: {
        items: 1,
        nav: false,
      },
      400: {
        items: 2,
        nav: false,
      },
      700: {
        items: 3,
        nav: false,
      },
      900: {
        items: 5,
        nav: false,
      },
      1000: {
        items: 6,
        nav: false,
        loop: true,
      },
    },
  });
});
$(".kse__btnright").click(function () {
  var owl = $(".all1");
  owl.trigger("next.owl.carousel");
});
$(".kse__btnleft").click(function () {
  var owl = $(".all1");
  owl.trigger("prev.owl.carousel");
});

$(document).ready(function () {
  $(".videogallery__boxm").owlCarousel({
    loop: true,
    navigation: true,
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    items: 1,
    mousewheel: false,
    dots: true,
  });
});
$(".videogallery__rightbtn").click(function () {
  var owl = $(".videogallery__boxm");
  owl.trigger("next.owl.carousel");
});
$(".videogallery__leftbtn").click(function () {
  var owl = $(".videogallery__boxm");
  owl.trigger("prev.owl.carousel");
});

let textEle = document.querySelectorAll(".text1");
for (let i = 0; i < textEle.length; i++) {
  let textOne = document.querySelectorAll(".text1")[i].innerText.split(" ");
  textEle[i].innerText = "";
  for (let j = 0; j < textOne.length; j++) {
    let node = document.createElement("div");
    node.classList.add("mystyle");
    let textnode = document.createTextNode(textOne[j]);

    node.appendChild(textnode);
    textEle[i].appendChild(node);
  }
}

let textEles = document.querySelectorAll(".mystyle");

for (let i = 0; i < textEles.length; i++) {
  let textOne = document.querySelectorAll(".mystyle")[i].innerText.split("");
  textEles[i].innerText = "";
  for (let j = 0; j < textOne.length; j++) {
    let node = document.createElement("span");

    let textnode = document.createTextNode(textOne[j]);

    node.appendChild(textnode);
    textEles[i].appendChild(node);
  }
}

//   -----menu------

jQuery(document).ready(function ($) {
  $("#menu").mmenu({
    extensions: [
      "effect-menu-zoom",
      "effect-panels-zoom",
      "pagedim-black",
      "theme-dark",
    ],
    offCanvas: {
      position: "right",
    },
    counters: true,
    iconPanels: true,
    navbars: [
      {
        position: "top",
      },
    ],
  });
});
// menu close

var recaptcha1;
var recaptcha2;
var myCallBack = function () {
  if (document.getElementById("recaptcha1")) {
    //It  exist
    //Render the recaptcha1 on the element with ID "recaptcha1"
    recaptcha1 = grecaptcha.render("recaptcha1", {
      sitekey: "6LdFUQ4UAAAAADrHrcxCEKu2m2eVm8FKt5-FjYiZ", //Replace this with your Site key
      theme: "dark",
    });
  }
  if (document.getElementById("recaptcha2")) {
    //Render the recaptcha2 on the element with ID "recaptcha2"
    recaptcha2 = grecaptcha.render("recaptcha2", {
      sitekey: "6LdFUQ4UAAAAADrHrcxCEKu2m2eVm8FKt5-FjYiZ", //Replace this with your Site key
      theme: "dark",
    });
  }
};

let textElea = document.querySelectorAll(".text2");
for (let i = 0; i < textElea.length; i++) {
  let textOne = document.querySelectorAll(".text2")[i].innerText.split(" ");
  textElea[i].innerText = "";
  for (let j = 0; j < textOne.length; j++) {
    let node = document.createElement("div");
    node.classList.add("mystyle2");
    let textnode = document.createTextNode(textOne[j]);

    node.appendChild(textnode);
    textElea[i].appendChild(node);
  }
}

let textEless = document.querySelectorAll(".mystyle2");

for (let i = 0; i < textEless.length; i++) {
  let textOne = document.querySelectorAll(".mystyle2")[i].innerText.split("");
  textEless[i].innerText = "";
  for (let j = 0; j < textOne.length; j++) {
    let node = document.createElement("span");

    let textnode = document.createTextNode(textOne[j]);

    node.appendChild(textnode);
    textEless[i].appendChild(node);
  }
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// 

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}





function openCityy(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
document.getElementById("defaultOpen_").click();


function tabOverview(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent_overview");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks_overview");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}


function openAccount(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent_");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}



function show() {
  document.getElementById('navigation_').style.display = 'flex';
  document.getElementById('header-button').setAttribute('onclick', 'hide()')
}
function hide() {
  document.getElementById('navigation_').style.display = 'none';
  document.getElementById('header-button').setAttribute('onclick', 'show()')

}

// id="header-button" onclick="show()"