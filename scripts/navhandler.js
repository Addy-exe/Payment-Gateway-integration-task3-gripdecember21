

const navSlide = () => {
    const burger = document.querySelector(".burger");
    const navlink = document.querySelector(".navlist");

    // console.log(burger);
    // console.log(navlink);
    burger.addEventListener("click", () => {
        navlink.classList.toggle("navSlide");
        let listItem = document.querySelectorAll(".navlist li");
        // burger.classList.toggle("cross-burger")
    });

}
navSlide();