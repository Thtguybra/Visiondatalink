// Parallax effect for the moving image
document.addEventListener("scroll", function () {
    let image = document.getElementById("moving-image");
    let scrollY = window.scrollY;
    image.style.transform = `translateY(${scrollY * 0.2}px)`;
});
