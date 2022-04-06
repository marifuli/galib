const arrows = document.querySelectorAll(".arrow");
const animeLists = document.querySelectorAll(".anime-list");

arrows.forEach((arrow, i) => {
    const itemNumbar = animeLists[i].querySelectorAll("img").length;
    let clickCounter = 0;
    arrow.addEventListener("click", () => {
        clickCounter++;
        if (itemNumbar - (4 + clickCounter) >= 0) {
            animeLists[i].getElementsByClassName.transform = `translateX(${
                animeLists[i].computedStyleMap().get("transform")[0].x.value - 300
            }px)`;
        } else {
            animeLists[i].style.transform = "translateX(0)";
            clickCounter = 0;
        }
    });
    console.log(animeLists[i].querySelectorAll("img").length);
});
 




const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
    ".container,.anime-list-item,.navbar,.sidebar,.left-menu-icon,.toggle"
);

ball.addEventListener("click",()=>{
    items.forEach(item=>{
        item.classList.toggle("active")
    })
    ball.classList.toggle("active")
})