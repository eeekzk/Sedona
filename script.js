var button = document.querySelector(".connection-button");
button.addEventListener("click", function (evt) {
    evt.preventDefault();
    button.classList.toggle("modal-show");
})
