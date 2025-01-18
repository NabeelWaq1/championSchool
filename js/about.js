const counters = document.querySelectorAll('.counters span');
const counterContainer = document.querySelector(".counters");
let menuIcon = document.querySelector(".menu");
let menuCloseIcon = document.querySelector(".close");
let mobileMenu = document.querySelector(".mobile-menu");

menuIcon.addEventListener("click", () => {
    mobileMenu.style.transform = "translateX(0)";
});
menuCloseIcon.addEventListener("click", () => {
    mobileMenu.style.transform = "translateX(1200px)";
});


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
