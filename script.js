let currentIndex = 0;
const images = document.querySelectorAll(".photo-gallery img");
const titleElement = document.getElementById("image-title");
const descriptionElement = document.getElementById("image-description");
const menuButton = document.getElementById("menu-button");
const sideMenu = document.getElementById("side-menu");

function isLonger(list1, list2) {
    return list1.length > list2.length;
  }

function changeImage(direction) {
    if (isLonger(document.querySelectorAll(".photo-gallery img"), images)) {
        images = document.querySelectorAll(".photo-gallery img");
    }
    images[currentIndex].classList.remove("active");
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    images[currentIndex].classList.add("active");
    titleElement.textContent = images[currentIndex].dataset.title;
    descriptionElement.textContent = images[currentIndex].dataset.description;
    images[currentIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
}

function toggleFAQ(element) {
    const answer = element.nextElementSibling;
    const icon = element.querySelector("span");
    if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
        answer.style.padding = "0 10px";
        icon.textContent = "→";
        element.classList.remove('open');
    } else {
        answer.style.maxHeight = answer.scrollHeight + "px"; // Ensure it expands fully
        answer.style.padding = "10px";
        icon.textContent = "↓";
        element.classList.add('open');
    }
}




menuButton.addEventListener("click", () => {
    sideMenu.classList.toggle("open"); 
    menuButton.classList.toggle("open"); 
});
