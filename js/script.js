let menuIcon = document.querySelector(".menu");
let menuCloseIcon = document.querySelector(".close");
let mobileMenu = document.querySelector(".mobile-menu");
let slides = document.querySelectorAll(".slide");
let leftBtn = document.querySelector(".left-btn");
let rightBtn = document.querySelector(".right-btn");
const counters = document.querySelectorAll('.counters span');
const counterContainer = document.querySelector(".counters");

menuIcon.addEventListener("click", () => {
    mobileMenu.style.transform = "translateX(0)";
});
menuCloseIcon.addEventListener("click", () => {
    mobileMenu.style.transform = "translateX(1200px)";
});

let slideCounter = 0;
let autoSlideInterval; // For storing the interval ID

const updateButtonState = () => {
    if (slideCounter === 0) {
        leftBtn.classList.add("disable");
    } else {
        leftBtn.classList.remove("disable");
    }

    if (slideCounter === slides.length - 1) {
        rightBtn.classList.add("disable");
    } else {
        rightBtn.classList.remove("disable");
    }
};

const slideLeft = () => {
    if (slideCounter > 0) {
        slideCounter--;
        slideImages();
    }
    updateButtonState();
};

const slideRight = () => {
    if (slideCounter < slides.length - 1) {
        slideCounter++;
        slideImages();
    } else {
        // Reset to the first slide if at the last slide
        slideCounter = 0;
        slideImages();
    }
    updateButtonState();
};

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

const slideImages = () => {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(-${slideCounter * 100}%)`;
    });
};

const startAutoSlide = () => {
    autoSlideInterval = setInterval(() => {
        slideRight();
    }, 5000); // Change slide every 3 seconds
};

const stopAutoSlide = () => {
    clearInterval(autoSlideInterval);
};

// Event Listeners for Buttons
leftBtn.addEventListener("click", () => {
    stopAutoSlide(); // Stop auto-sliding when manually navigating
    slideLeft();
    startAutoSlide(); // Restart auto-sliding
});

rightBtn.addEventListener("click", () => {
    stopAutoSlide();
    slideRight();
    startAutoSlide();
});

// Initialize slider
updateButtonState();
startAutoSlide();


let activated = false;

window.addEventListener("scroll", () => {
    if(pageYOffset > counterContainer.offsetTop - counterContainer.offsetHeight - 200 && activated == false){
      counters.forEach((counter) => {
        counter.innerText = 0;
        let count = 0;

        function updateCount(){
            const target = parseInt(counter.dataset.count);
            if(count < target){
                count++;
                counter.innerText = count;
                setTimeout(updateCount,100);
            }else{
                counter.innerText = target;
            }
        }

        updateCount();
        activated = true;

      })
    }else if(pageYOffset < counterContainer.offsetTop - counterContainer.offsetHeight - 900 || pageYOffset === 0 && activated === true){
        counters.forEach((counter) => {
            counter.innerText = 0;
        })
        activated = false;
    }
})
