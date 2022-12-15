const toggleMode = document.querySelector(".toggle-mode");
const container = document.querySelector(".container");
const body = document.querySelector("body");
const boxs = document.querySelectorAll(".box");
const navlink = document.querySelectorAll(".nav-bar ul li a");
const sections = document.querySelectorAll("section");
const iconToggle = toggleMode.querySelector("span i");
const toggleTop = document.querySelector(".toggleTop");

toggleTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

window.addEventListener("scroll", checkBox);
window.addEventListener("scroll", activeLink);

toggleMode.addEventListener("click", () => {
    container.classList.toggle("active");
    body.classList.toggle("active");
    changeIcon(container,body)
});

function changeIcon(container,body) {
    if(container.classList.contains("active") && body.classList.contains("active")) {
        iconToggle.classList.replace("bi-moon-fill", "bi-brightness-high-fill");
    } else {
        iconToggle.classList.replace("bi-brightness-high-fill", "bi-moon-fill");
    }
};

function checkBox() {
   const triggerBottom = window.innerHeight / 5 * 4;
   boxs.forEach(box => {
     const top = box.getBoundingClientRect().top;

     if (triggerBottom < top) {
        box.classList.remove("show");
     } else {
        box.classList.add("show");
     };
   });
};

function activeLink() {
    let id = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        
        if (scrollY >= sectionTop - 65) {
            id = section.getAttribute("id");
        }
    });

    navlink.forEach(link => {
        link.classList.remove("active");
        document.querySelector('.nav-bar ul li a[href*='+ id +']').classList.add("active");
    });
};

