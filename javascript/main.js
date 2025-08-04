// start Header
// anchor Tags
// Header navigation
let liHeaders = document.querySelectorAll(".header .nav ul li a");
let iHome = document.querySelector(".header .nav ul li .home");

liHeaders.forEach((liHead) => {
  liHead.addEventListener("click", (e) => {
    liHeaders.forEach((a) => a.classList.remove("active"));
    e.target.classList.add("active");
  });
});

// Search icon
let iconHeader = document.querySelector(".header .form i");
let formHeader = document.querySelector(".header .form");
let ulHeader = document.querySelector(".header .nav ul");
let input = document.createElement("input");

iconHeader.addEventListener("click", () => {
  if (ulHeader.style.display !== "none") {
    input.type = "text";
    input.name = "search";
    input.placeholder = "What do you think";
    input.classList.add("input-click");
    formHeader.appendChild(input);
    formHeader.style.width = "45%";
    ulHeader.style.display = "none";
    iconHeader.style.color = "#1f2021";
  } else {
    input.remove();
    formHeader.style.width = "40px";
    ulHeader.style.display = "flex";
    iconHeader.style.color = "white";
  }

  iconHeader.addEventListener("mouseout", () => {
    setTimeout(() => {
      input.remove();
      formHeader.style.width = "40px";
      ulHeader.style.display = "flex";
      iconHeader.style.color = "white";
    }, 3000);
  });
});

// Reset active link on scroll top
window.onscroll = () => {
  if (scrollY <= 5) {
    liHeaders.forEach((a) => a.classList.remove("active"));
    iHome.classList.add("active");
  }
};

let landingTexts = document.querySelectorAll(".landing .text");
let leftArrow = document.querySelector(".landing .fa-angle-left");
let rightArrow = document.querySelector(".landing .fa-angle-right");
let bullets = document.querySelectorAll(".landing .bullets li");

let currentIndex = parseInt(localStorage.getItem("landingIndex")) || 0;

function updateSlides(index) {
  landingTexts.forEach((text, i) => {
    if (i === index) {
text.style.transform = "translateY(-50%) translateX(0%)";
      text.style.opacity = "1";
      text.style.pointerEvents = "auto";
    } else if (i < index) {
      text.style.transform = "translateX(-100%) translateY(-50%)";
      text.style.opacity = "0";
      text.style.pointerEvents = "none";
    } else {
      text.style.transform = "translateX(100%) translateY(-50%)";
      text.style.opacity = "0";
      text.style.pointerEvents = "none";
    }
  });

  bullets.forEach((bullet, i) => {
    bullet.classList.toggle("active", i === index);
  });

  localStorage.setItem("landingIndex", index);
}

// Right arrow
rightArrow.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % landingTexts.length;
  updateSlides(currentIndex);
});

// Left arrow
leftArrow.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + landingTexts.length) % landingTexts.length;
  updateSlides(currentIndex);
});

// Bullets
bullets.forEach((bullet, i) => {
  bullet.addEventListener("click", () => {
    currentIndex = i;
    updateSlides(currentIndex);
  });
});

// Initial load
updateSlides(currentIndex);



let icons = document.querySelectorAll(".protoflio ul li");
let moreBtn = document.getElementById("btn");
let allBoxes = document.querySelectorAll(".protoflio .images-box .box");
let addBoxes = document.querySelectorAll(".protoflio .images-box .add");

let showingAll = false;

icons.forEach((icon) => {
  icon.addEventListener("click", (e) => {
    icons.forEach((i) => i.classList.remove("active"));
    e.target.classList.add("active");

    let selectedClass = "";

    if (e.target.classList.contains("i-all")) {
      selectedClass = "all";
    } else if (e.target.classList.contains("i-app")) {
      selectedClass = "app";
    } else if (e.target.classList.contains("i-photo")) {
      selectedClass = "photo";
    } else if (e.target.classList.contains("i-web")) {
      selectedClass = "web";
    } else if (e.target.classList.contains("i-print")) {
      selectedClass = "print";
    }

    allBoxes.forEach((box) => {
      if (selectedClass === "all") {
        box.classList.remove("d-none");
        if (box.classList.contains("add")) box.classList.add("d-none");
        moreBtn.classList.remove("d-none");
        moreBtn.textContent = "More";
        showingAll = false;
      } else {
        if (box.classList.contains(selectedClass)) {
          box.classList.remove("d-none");
        } else {
          box.classList.add("d-none");
        }
        moreBtn.classList.add("d-none");
      }
    });
  });
});

moreBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (!showingAll) {
    addBoxes.forEach((box) => box.classList.remove("d-none"));
    moreBtn.textContent = "Less";
    showingAll = true;
  } else {
    addBoxes.forEach((box) => box.classList.add("d-none"));
    moreBtn.textContent = "More";
    showingAll = false;
  }
});



let customers = document.querySelectorAll(".skills .customer");
let Tesbullets = document.querySelectorAll(".skills .bullets li");

let commentIndex = 0;

// function to update comments view
function updateComments(index) {
  customers.forEach((customer, i) => {
    customer.style.display = i === index ? "flex" : "none";
  });

  Tesbullets.forEach((bullet, i) => {
    bullet.classList.toggle("active", i === index);
  });

  commentIndex = index;
}

// trigger on bullets click
Tesbullets.forEach((bullet, index) => {
  bullet.addEventListener("click", () => {
    updateComments(index);
  });
});

// show initial comment
updateComments(commentIndex);

setInterval(() => {
  let nextIndex = (commentIndex + 1) % customers.length;
  updateComments(nextIndex);
}, 3000); 