const element = document.getElementById("menu");
const check = document.getElementById("checkbox");
const theme = document.getElementById('theme');
const body = document.getElementById('body');
const icon = document.querySelector('.icon');

function showContent() {
    if (check.checked) {
        element.style.display='block';
    }
    else {
        element.style.display='none';
    }
}

check.addEventListener('click', (e)=>{
    showContent();
});

theme.addEventListener('change', function(){
    if (this.checked) {
        document.body.classList.toggle("dark");
        localStorage.setItem('dark', this.checked);
        icon.style.backgroundImage =  "url('./imgs/icons8-bombilla-globo-48.png')";
    } else {
        document.body.classList.remove('dark');  
        localStorage.removeItem('dark');
        icon.style.backgroundImage =  "url('./imgs/icons8-luna-creciente-48.png')";
   }
});

if(localStorage.getItem('dark')) {
    document.body.classList.add('dark');
    icon.style.backgroundImage =  "url('./imgs/icons8-bombilla-globo-48.png')";
}