
let observer = new IntersectionObserver((elements) => {
    const elementIntersecting = elements.find(element => element.isIntersecting);
    if (elementIntersecting) {
        document.querySelector('.button__topbar--title').textContent = "Base viva " + elementIntersecting.target.id + "/5"
    }
});

document.querySelectorAll('.number').forEach(function(elem) {
    observer.observe(elem);
})