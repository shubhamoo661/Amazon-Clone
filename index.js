// Image-Slider

let slides = document.querySelectorAll('.slide')
let previousBtn = document.getElementById('prev')
let nextBtn = document.getElementById('next')
let counter = 0;


slides.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}%`
    }
)

const slideshow = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`
        }
    )
}

function backwardBtn() {
    if (counter == 0) {
        counter = slides.length - 1
        slideshow()
    }
    else {
        counter--
        slideshow()
    }
}

previousBtn.addEventListener("click", backwardBtn)

function forwardBtn() {
    if (counter == slides.length - 1) {
        counter = 0;
        slideshow();
    }
    else {
        counter++
        slideshow()
    }
}

nextBtn.addEventListener("click", forwardBtn)

// Autoslide Image banner

function autoslide() {
    forwardBtn()
}

setInterval(() => {
    autoslide()
}, 4000);



// sidbar navigation

const sidebarNavigation = document.getElementById("sidebar-container-navigation")
const sidebarOpenNavigation = document.getElementById("open-nav-sidebar")
const sidebarCloseNavigationBtn = document.getElementById("sidebar-navigation-close")

sidebarOpenNavigation.addEventListener("click", () => {
    sidebarNavigation.classList.toggle("slidebar-show")

})

sidebarCloseNavigationBtn.addEventListener("click", () => {
    sidebarNavigation.classList.toggle("slidebar-show")
})


// Row3 imageSlider when user clice Btn

let scrollContainer = document.querySelector(".row-box3-list")
let nextButton = document.getElementById("Next")
let backButton = document.getElementById("Prev")

scrollContainer.addEventListener("wheel", (evt) => {
    // evt.preventDefault()
    scrollContainer.scrollLeft += evt.deltaY
})

nextButton.addEventListener("click", () => {
    scrollContainer.scrollLeft += 900;
})
backButton.addEventListener("click", () => {
    scrollContainer.scrollLeft -= 900;
})

let rowBox3 = document.querySelector("#box3")
let displayBtns = document.querySelectorAll(".row3-Btn")

displayBtns.forEach((ele) => {
    ele.style.display = "none"
})

rowBox3.addEventListener("mouseover", () => {
    displayBtns.forEach((ele) => {
        ele.style.display = "block"
    })
})

rowBox3.addEventListener("mouseout", () => {
    displayBtns.forEach((ele) => {
        ele.style.display = "none"
    })
})


// Row4 imageSlider when user clice Btn

let row4_scrollContainer = document.querySelector(".row-box4-imgItem")
let row4_nextButton = document.getElementById("box4-Next")
let row4_backButton = document.getElementById("box4-Prev")

row4_scrollContainer.addEventListener("wheel", (evt) => {
    // evt.preventDefault()
    row4_scrollContainer.scrollLeft += evt.deltaY
})

row4_nextButton.addEventListener("click", () => {
    row4_scrollContainer.scrollLeft += 900;
})
row4_backButton.addEventListener("click", () => {
    row4_scrollContainer.scrollLeft -= 900;
})


let rowBox4 = document.querySelector("#box4")

let displayRow4Btns = document.querySelectorAll(".row4-Btn")

displayRow4Btns.forEach((ele) => {
    ele.style.display = "none"
})

rowBox4.addEventListener("mouseover", () => {
    displayRow4Btns.forEach((ele) => {
        ele.style.display = "block"
    })
})

rowBox4.addEventListener("mouseout", () => {
    displayRow4Btns.forEach((ele) => {
        ele.style.display = "none"
    })
})



// -----------------------------------------------

// row3 data
// const todayDeal = [

//     {
//         img: "https://m.media-amazon.com/images/I/41Kg6ae87jL._AC_SY200_.jpg",
//         discount: 39,
//         DealofDay: 'Deal of the Day',
//         desc: "Melissa & Doug Toy Keys Cars",
//     },

//     {
//         img: "https://m.media-amazon.com/images/I/41zq0WJNYEL._AC_SY200_.jpg",
//         discount: 31,
//         DealofDay: 'Deal of the Day',
//         desc: "The Assassin's Blade: The Throne"
//     },

//     {
//         img: "https://m.media-amazon.com/images/I/41bX5IU7gHL._AC_SY200_.jpg",
//         discount: 15,
//         DealofDay: 'Deal of the Day',
//         desc: "Maldon Salt, Sea Salt Flakes, 8.5"
//     },

//     {
//         img: "https://m.media-amazon.com/images/I/4151gj7ufuL._AC_SY200_.jpg",
//         discount: "",
//         DealofDay: 'Deal of the Day',
//         desc: "Head & Shoulder Dry Scalp Care"
//     },

//     {
//         img: "https://m.media-amazon.com/images/I/416DtwLGXIL._AC_SY200_.jpg",
//         discount: 16,
//         DealofDay: 'Deal of the Day',
//         desc: "OGX Extra Strength Refreshing"
//     },

//     {
//         img: "https://m.media-amazon.com/images/I/31FcxMrsmwL._AC_SY200_.jpg",
//         discount: 32,
//         DealofDay: 'Deal of the Day',
//         desc: "PHOTO STORAGE BOXES, HOLDS OVEf"
//     },

//     {
//         img: "https://m.media-amazon.com/images/I/31fOGCzelvL._AC_SY200_.jpg",
//         discount: 15,
//         DealofDay: 'Deal of the Day',
//         desc: "JVC Gumy Mini True Wireless Earbuds.."
//     },

//     {
//         img: "https://m.media-amazon.com/images/I/31NIkqExIlL._AC_SY200_.jpg",
//         discount: 52,
//         DealofDay: 'Deal of the Day',
//         desc: "Leviton 9432-P 30 Amp, 125/250 Volt."
//     },

//     {
//         img: "https://m.media-amazon.com/images/I/31RdkaVuB1L._AC_SY200_.jpg",
//         discount: 35,
//         DealofDay: 'Deal of the Day',
//         desc: "GM Genuine Parts 22699255 Front Do"
//     },

//     {
//         img: "https://m.media-amazon.com/images/I/51RWKvO7JhL._AC_SY200_.jpg",
//         discount: 35,
//         DealofDay: 'Deal of the Day',
//         desc: "Southworth Planner January 2023"
//     },

//     {
//         img: "https://m.media-amazon.com/images/I/41AmZ1-n71L._AC_SY200_.jpg",
//         discount: 32,
//         DealofDay: 'Deal of the Day',
//         desc: "Case-Mate iPhone 14 Pro Max Screen"
//     },

//     {
//         img: "https://m.media-amazon.com/images/I/31LPJLxN4PL._AC_SY200_.jpg",
//         discount: 26,
//         DealofDay: 'Deal of the Day',
//         desc: "Tripp Lite 6 Outlet Surge Protector Po"
//     },

//     {
//         img: "https://m.media-amazon.com/images/I/31GJ5ezAK5L._AC_SY200_.jpg",
//         discount: 25,
//         DealofDay: 'Deal of the Day',
//         desc: "Corsair KATAR Elite Wireless Gaming..."
//     },

//     {
//         img: "https://m.media-amazon.com/images/I/31mEzHVS37L._AC_SY200_.jpg",
//         discount: 25,
//         DealofDay: 'Deal of the Day',
//         desc: "Tripp Lite TLP604 4Ft. 6-Outlet Surge"
//     },

//     {
//         img: "https://m.media-amazon.com/images/I/41c01hBjdHL._AC_SY200_.jpg",
//         discount: 25,
//         DealofDay: 'Deal of the Day',
//         desc: "Trianium Clarium Series Designed for.."
//     }
// ]

// let thirdRowData = document.querySelector(".row-box3-list")
// let row_third_item = ``
// let todayDealLength = todayDeal.length

// for (let i = 0; i < todayDealLength; i++) {
//     row_third_item += `
//                 <div class="row-box3-item">
//                     <a href="">
//                         <div style="width:${width}" class="row-box3-img">
//                             <img src=${todayDeal[i].img}
//                                 alt="">
//                         </div>
//                         <div class="discount">
//                             <p> ${todayDeal[i].discount} off </p>
//                             <span>Deal</span>
//                         </div>
//                         <div class="price">
//                             <p >${todayDeal[i].DealofDay} </p>
//                             <span>list price</span>
//                         </div>
//                         <p>${todayDeal[i].desc}</p>
//                     </a>
//                 </div>
//     `
// }

// thirdRowData.innerHTML = row_third_item

// console.log(row_third_item);