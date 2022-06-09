const cardsContainer = document.querySelector(".cards_container");
const cards = document.querySelector(".cards");
cards.style.left = `${0}px`;

function boundCards() {
  const container_rect = cardsContainer.getBoundingClientRect();
  const cards_rect = cards.getBoundingClientRect();
  if (parseInt(cards.style.left) > 0) {
    cards.style.left = 0;
  } else if (cards_rect.right < container_rect.right) {
    cards.style.left = `-${cards_rect.width - container_rect.width - 15}px`;
  }
}

//automatic slide show
function autoSlider() {
  const container_rect = cardsContainer.getBoundingClientRect();

  const cards_rect = cards.getBoundingClientRect();

  if (window.innerWidth > 1300 && window.innerWidth < 3000) {
    if (cards_rect.right <= container_rect.right) {
      cards.style.left = `-${cards_rect.width - container_rect.width + 17}px`;
    } else {
      cards.style.left = `${parseInt(cards.style.left) - 430}px`;
      console.log(parseInt(cards.style.left));
    }
  } else if (window.innerWidth > 992 && window.innerWidth < 1300) {
    if (cards_rect.right <= container_rect.right) {
      cards.style.left = `-${cards_rect.width - container_rect.width + 15}px`;
    } else {
      cards.style.left = `${parseInt(cards.style.left) - 330}px`;
    }
  } else if (window.innerWidth > 500 && window.innerWidth < 992) {
    if (cards_rect.right <= container_rect.right) {
      cards.style.left = `-${cards_rect.width - container_rect.width + 15}px`;
    } else {
      cards.style.left = `${parseInt(cards.style.left) - 255}px`;
    }
  } else {
    if (cards_rect.right <= container_rect.right) {
      cards.style.left = `-${cards_rect.width - container_rect.width + 15}px`;
    } else {
      cards.style.left = `${parseInt(cards.style.left) - 331}px`;
    }
  }
}

document
  .getElementsByClassName("arrow_left")[0]
  .addEventListener("click", leftClick);

function leftClick() {
  const container_rect = cardsContainer.getBoundingClientRect();

  const cards_rect = cards.getBoundingClientRect();

  if (window.innerWidth > 1300 && window.innerWidth < 3000) {
    if (cards.style.left >= `${0}px`) {
      cards.style.left = `${0}px`;
    } else {
      cards.style.left = `${parseInt(cards.style.left) + 430}px`;
      console.log(parseInt(cards.style.left));
    }
  } else if (window.innerWidth > 992 && window.innerWidth < 1300) {
    if (cards.style.left >= `${0}px`) {
      cards.style.left = `${0}px`;
    } else {
      cards.style.left = `${parseInt(cards.style.left) + 330}px`;
    }
  } else if (window.innerWidth > 500 && window.innerWidth < 992) {
    if (cards.style.left >= `${0}px`) {
      cards.style.left = `${0}px`;
    } else {
      cards.style.left = `${parseInt(cards.style.left) + 255}px`;
    }
  } else {
    if (cards.style.left >= `${0}px`) {
      cards.style.left = `${0}px`;
    } else {
      cards.style.left = `${parseInt(cards.style.left) + 331}px`;
    }
  }
}

document
  .getElementsByClassName("arrow_right")[0]
  .addEventListener("click", rightClick);

function rightClick() {
  autoSlider();
}

//********************* */ Stop auto sliding on hover *************************
var autoSliding = setInterval("autoSlider()", 3000);

document
  .getElementById("cards_container")
  .addEventListener("mouseover", autoSliderMouseOver);

document
  .getElementById("cards_container")
  .addEventListener("mouseout", autoSliderMouseOut);

function autoSliderMouseOut() {
  autoSliding = setInterval("autoSlider()", 3000);
}

function autoSliderMouseOver() {
  clearInterval(autoSliding);
  console.log("diasio");
}

//************************ */ show on scroll **************************
function onLoad() {
  var elements;
  var windowHeight;

  function init() {
    elements = document.querySelectorAll(".hidden");
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var positionFromTop = elements[i].getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= 0) {
        element.classList.add("fade-in-element");
        element.classList.remove("hidden");
      } else {
        element.classList.remove("fade-in-element");
        element.classList.add("hidden");
      }
    }
  }

  window.addEventListener("scroll", checkPosition);
  window.addEventListener("resize", init);

  init();
  checkPosition();
}

setInterval(() => {
  onLoad();
}, 500);

document.getElementsByClassName("cards")[0].onmouseover = function (e) {
  const element = e.target;
  console.log(element.id);
  if (element.id) {
    element.classList.add("display_second");
    var source = `http://127.0.0.1:5500/assets/images/machine${element.id}_2.jpg`;
    console.log(source);
    element.src = source;
  }
  setTimeout(() => {
    element.classList.remove("display_second");
  }, 1500);
};

document.getElementsByClassName("cards")[0].onmouseout = function (e) {
  const element = e.target;
  console.log(element.id);
  if (element.id) {
    element.classList.add("display_second");
    var source = `http://127.0.0.1:5500/assets/images/machine${element.id}.jpg`;
    console.log(source);
    element.src = source;
  }
  setTimeout(() => {
    element.classList.remove("display_second");
  }, 1500);
};
