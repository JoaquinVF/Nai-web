function showContent() {
    element = document.getElementById("menu");
    check = document.getElementById("checkbox");
    if (check.checked) {
        element.style.display='block';
        element.style.transition= "opacity 0.5s";
    }
    else {
        element.style.display='none';
    }
}