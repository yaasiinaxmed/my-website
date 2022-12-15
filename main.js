const toggleMode = document.querySelector(".toggle-mode");
const container = document.querySelector(".container");
const body = document.querySelector("body");
const boxs = document.querySelectorAll(".box");
const navlink = document.querySelectorAll(".nav-bar ul li a");
const sections = document.querySelectorAll("section");
const iconToggle = toggleMode.querySelector("span i");
const toggleTop = document.querySelector(".toggleTop");
const form = document.querySelector(".form");
const firstName = document.querySelector("#FirstName");
const lastName = document.querySelector("#LastName");
const emailForm = document.querySelector("#Email");
const messageForm = document.querySelector("#message");

let regeX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const checkEmail = (flex) => {
    if (emailForm.value.match(regeX)) {
        flex.classList.add("success");
        flex.classList.remove("error");
    } else {
        flex.classList.add("error");
        flex.classList.remove("success");
    }
}

const checkEmpty = (grid,flex) => {
    if (firstName.value === "") {
        grid.classList.add("error");
        grid.classList.remove("success");
    } else {
        grid.classList.add("success");
        grid.classList.remove("error");
    }

    if (emailForm.value === "") {
        flex.classList.add("error");
        flex.classList.remove("success");
    } else {
        flex.classList.add("success");
        flex.classList.remove("error");
    }

    if (messageForm.value === "") {
        flex.classList.add("errorMessage");
        flex.classList.remove("successMessage");
    } else {
        flex.classList.add("successMessage");
        flex.classList.remove("errorMessage");
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const gridInput = form.querySelector(".grid-input");
    const flexInput = form.querySelector(".flex-input");
    checkEmpty(gridInput,flexInput);
    checkEmail(flexInput);
});

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

