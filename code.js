const nav = document.querySelector("#nav")
const openNav = document.querySelector("#openNav")
const closeNav = document.querySelector("#closeNav")

openNav.addEventListener("click", () => {
    nav.classList.add("visible");
})

closeNav.addEventListener("click", () => {
    nav.classList.remove("visible")
})