const name = document.querySelector("#name");
const div = document.querySelector("#goes_here");
name.addEventListener("keyup", function() {
    div.textContent = name;
});
