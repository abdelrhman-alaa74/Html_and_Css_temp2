// start Header
// anchor Tags
let liHeaders = document.querySelectorAll(".header .nav ul li a");
let iHome = document.querySelector(".header .nav ul li .home")
liHeaders.forEach((liHead) => {
    liHead.addEventListener("click", (e) => {
        liHeaders.forEach((a) => {
            a.classList.remove("active")
        })
        e.target.classList.add("active");
    })
})

// search icon
let iconHeader = document.querySelector(".header .form i")
let formHeader = document.querySelector(".header .form")
let ulHeader = document.querySelector(".header .nav ul")
let input = document.createElement("input")
iconHeader.addEventListener("click", () => {
    if (ulHeader.style.display !== "none") {
        input.type = "text"
        input.name = "search"
        input.placeholder = "What do you think"
        input.classList.add("input-click")
        formHeader.appendChild(input)
        formHeader.style.width = "45%"
        ulHeader.style.display = "none"
        iconHeader.style.color = "#1f2021"
        iconHeader.style.transformTranslateY = "-25%"
        iconHeader.style.right = "5px"
    } else {
        input.remove();
        formHeader.style = "40px"
        ulHeader.style.display = "flex"
        iconHeader.style.color = "white"
        iconHeader.style.transformTranslateY = "-50%"
        iconHeader.style.right = "0px"
    }
    iconHeader.addEventListener("mouseout", () => {
        setTimeout(() => {
            input.remove();
            formHeader.style = "40px"
            ulHeader.style.display = "flex"
            iconHeader.style.color = "white"
            iconHeader.style.transformTranslateY = "-50%"
            iconHeader.style.right = "0px"
        },3000)
    })
})


window.onscroll = () => {
    if (scrollY <= 5) {
        
liHeaders.forEach((liHead) => {
        liHeaders.forEach((a) => {
            a.classList.remove("active")
        })
        iHome.classList.add("active");
})
    }
}
// end Header
// start landing Text

let landingTexts = document.querySelectorAll(".landing .text")
let leftAngle = document.querySelector(".landing .fa-angle-left")
let rightAngle = document.querySelector(".landing .fa-angle-right")
let bullets = document.querySelectorAll(".bullet")
let leftCircle = document.querySelector(".bullets .one")
let midCircle = document.querySelector(".bullets .two")
let rightCircle = document.querySelector(".bullets .three")

reverseLocalStorge()

leftAngle.addEventListener("click", () => {
    landingTexts.forEach((landingText) => {
        if (landingText.style.transform == `translateX(${0}%)`) {
            landingText.style.transform = `translateX(${-200}%)`;
            bullets.forEach((bullet) => {
                    bullet.classList.remove("active")
                })
            rightCircle.classList.add("active")
            setLocalStorge()
        } else if (landingText.style.transform == `translateX(${-100}%)`) {
            landingText.style.transform = `translateX(${0}%)`;
            bullets.forEach((bullet) => {
                    bullet.classList.remove("active")
                })
            leftCircle.classList.add("active")
            setLocalStorge()
        } else {
            landingText.style.transform = `translateX(${-100}%)`;
            bullets.forEach((bullet) => {
                    bullet.classList.remove("active")
                })
            midCircle.classList.add("active")
            setLocalStorge()
        }
    })
})

rightAngle.addEventListener("click", () => {
    landingTexts.forEach((landingText) => {
        if (landingText.style.transform == `translateX(${0}%)`) {
            landingText.style.transform = `translateX(${-100}%)`;
            bullets.forEach((bullet) => {
                    bullet.classList.remove("active")
                })
            midCircle.classList.add("active")
            setLocalStorge()
        } else if (landingText.style.transform == `translateX(${-100}%)`) {
            landingText.style.transform = `translateX(${-200}%)`;
            bullets.forEach((bullet) => {
                    bullet.classList.remove("active")
                })
            rightCircle.classList.add("active")
            setLocalStorge()
        } else {
            landingText.style.transform = `translateX(${0}%)`;
            bullets.forEach((bullet) => {
                    bullet.classList.remove("active")
                })
            leftCircle.classList.add("active")
            setLocalStorge()
        }
    })
})

bullets.forEach((bullet) => {
    bullet.addEventListener("click", (e) => {
        bullets.forEach((a) => {
            a.classList.remove("active")
        })
        e.target.classList.add("active")
        landingTexts.forEach((landingText) => {
            if (e.target == leftCircle) {
                landingText.style.transform = `translateX(${0}%)`
                setLocalStorge()
            } else if (e.target == rightCircle) {
                landingText.style.transform = `translateX(${-200}%)`
                setLocalStorge()
            } else {
                landingText.style.transform = `translateX(${-100}%)`
                setLocalStorge()
            }
        })
    })
})

// set local Storge

let setLocalStorge = ()=>{
    let arr = []
    landingTexts.forEach((landingText) => {
        if (landingText.style.transform == `translateX(${0}%)`) {
            let record = {
                text: "translateX(${0}%)",
            }
            arr.push(JSON.stringify(record))
            localStorage.setItem("active",arr[0])
        } else if (landingText.style.transform == `translateX(${-100}%)`) {
            let record = {
                text: "translateX(${-100}%)",
            }
            arr.push(JSON.stringify(record))
            localStorage.setItem("active",arr[0])
        } else {
            let record = {
                text: "translateX(${-200}%)",
            }
            arr.push(JSON.stringify(record))
            localStorage.setItem("active",arr[0])
        }
    })
}


// reverse localStrorge
function reverseLocalStorge() {
    if (localStorage.getItem("active")) {
        let items = localStorage.getItem("active")
        let arr = JSON.parse(items)
        landingTexts.forEach((landingText) => {
            if (arr.text == "translateX(${0}%)") {
                landingText.style.transform = `translateX(${0}%)`;
                bullets.forEach((bullet) => {
                        bullet.classList.remove("active")
                    })
                leftCircle.classList.add("active")
            } else if (arr.text == "translateX(${-100}%)") {
                landingText.style.transform = `translateX(${-100}%)`;
                bullets.forEach((bullet) => {
                        bullet.classList.remove("active")
                    })
                midCircle.classList.add("active")
            } else if(arr.text == "translateX(${-200}%)") {
                landingText.style.transform = `translateX(${-200}%)`;
                bullets.forEach((bullet) => {
                        bullet.classList.remove("active")
                    })
                rightCircle.classList.add("active")
            }
        })
    }
}
// end landing text


// protoflieo btn 
let btn = document.querySelector(".protoflio .btn")
let addboxes = document.querySelectorAll(".protoflio .images-box .add")
btn.addEventListener("click", () => {
    addboxes.forEach((box) => {
        if (box.classList.contains("d-none")) {
            box.classList.remove("d-none")
            btn.innerText = "Less"
        } else {
            box.classList.add("d-none")
            btn.innerText = "More"
        }
    })
})



// 

let icons = document.querySelectorAll(".protoflio ul li")
let appBoxes = document.querySelectorAll(".protoflio .images-box .app")
let photoBoxes = document.querySelectorAll(".protoflio .images-box .photo")
let webBoxes = document.querySelectorAll(".protoflio .images-box .web")
let printBoxes = document.querySelectorAll(".protoflio .images-box .print")
let AllBoxes = document.querySelectorAll(".protoflio .images-box .box")


handleBoxes("i-all" , AllBoxes)
handleBoxes("i-app" , appBoxes)
handleBoxes("i-photo" , photoBoxes)
handleBoxes("i-web" , webBoxes)
handleBoxes("i-print", printBoxes)



function handleBoxes(className , boxes) {
    icons.forEach((icon) => {
        icon.addEventListener("click", (e) => {
            icons.forEach((a) => a.classList.remove("active"))
            e.target.classList.add("active")
            if (e.target.classList.contains(className)) {
                AllBoxes.forEach((box) => {
                    box.classList.add("d-none")
                    boxes.forEach((e) => e.classList.remove("d-none"))
                    btn.classList.add("d-none")
                })
            } else if (e.target.classList.contains("i-all")) {
                AllBoxes.forEach((e) => e.classList.remove("d-none"))
                addboxes.forEach((e)=> e.classList.add("d-none"))
                btn.classList.remove("d-none")
            }
        })
    })
}