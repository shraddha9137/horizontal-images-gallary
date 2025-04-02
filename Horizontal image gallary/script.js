let scrollcontainer = document.querySelector(".gallery");
let backbtn = document.querySelector("#backbtn");
let nextbtn = document.querySelector("#nextbtn");

scrollcontainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollcontainer.scrollLeft += evt.deltaY * 2; 
});

nextbtn.addEventListener("click", () => {
    scrollcontainer.scrollBy({ left: 900, behavior: "smooth" });
});

backbtn.addEventListener("click", () => {
    scrollcontainer.scrollBy({ left: -900, behavior: "smooth" });
});
