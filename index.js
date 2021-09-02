const element = document.getElementById("menu");
const check = document.getElementById("checkbox");
const theme = document.getElementById('theme');
const body = document.getElementById('body');
const bombilla = document.querySelector('.bombilla');
const luna = document.querySelector('.luna');
const main = document.querySelector('main');
const load = document.querySelector('.load');
const instagram = document.querySelector('.social');
const naiqui = document.querySelector('#naiqui');


function loading(){
    if (document.title !== 'Naiquen Villanueva | Fotografía') {
        setTimeout(function(){
            load.style.opacity = '0';
            load.style.display = 'none';
    
            main.style.display = 'block';
            setTimeout(()=> (main.style.opacity = '1'), 50)
        }, 2000)
    } else{
        naiqui.addEventListener("click",(e)=>{
            load.style.opacity = '0';
            load.style.display = 'none';
        
            main.style.display = 'block';
            setTimeout(()=> (main.style.opacity = '1'), 50)
        })
    }
}
loading();



function showMenu() {
    if (check.checked) {
        element.style.display='block';
        setTimeout((e)=>{
            element.style.opacity='1';
        },50)
    }
    else {
        setTimeout((e)=>{
            element.style.opacity='0';
            element.style.display='none';
        },50)
    }
}

check.addEventListener('click', (e)=>{
    showMenu();
});

theme.addEventListener('change', function(){
    if (this.checked) {
        document.body.classList.toggle("dark");
        localStorage.setItem('dark', this.checked);
        luna.style.display = 'none';
        bombilla.style.display = 'block';
        instagram.style.backgroundImage= "url('./imgs/icons8_instagram_old_100px.png')";        
    } else {
        document.body.classList.remove('dark');  
        localStorage.removeItem('dark');
        luna.style.display = 'block';
        bombilla.style.display = 'none';
        instagram.style.backgroundImage= "url('./imgs/icons8-instagram-viejo-100.png')";        
   }
});

function darkOrLight(){
    if(localStorage.getItem('dark')) {
        document.body.classList.add('dark');
    } else {
    luna.style.display = 'block';
    bombilla.style.display = 'none';
    instagram.style.backgroundImage= "url('./imgs/icons8-instagram-viejo-100.png')"; 
    }
}

darkOrLight();
