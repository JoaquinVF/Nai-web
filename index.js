
function showContent() {
    element = document.getElementById("menu");
    check = document.getElementById("checkbox");
    if (check.checked) {
        element.style.display='block';
    }
    else {
        element.style.display='none';
    }
}

function changeTheme(){
    theme = document.getElementById("theme");
    if (theme.checked){
        background = document.getElementById("top");
        background.style.background = '#212121';
        background.style.color = 'white';
    } else {
        background.style.background = 'white';
        background.style.color = 'black';
    }
}