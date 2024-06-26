if (mobileCheck()==true) { 
    let header = document.getElementById('header');  
    header.innerHTML = '<img alt="Our Logo" src="Images/phone-logo.png" class="logo"><button class="i-menu"><i class="fa-solid fa-bars menu-i"></i></button>';
    let menuDiv = document.createElement("div");
    menuDiv.setAttribute("id", 'menu-phone'); 
    menuDiv.setAttribute("class", 'hidden-menu'); 
    menuDiv.innerHTML = '<a href="#" class="menu-option one"><i class="fa-solid fa-house"></i></a><a href="#about" class="menu-option two">About</a><a href="#experience" class="menu-option three">Experience</a><a href="#contact" class="menu-option four">Contact</a>';
    document.body.appendChild(menuDiv);

let menu = document.getElementById('menu-phone'); 
let option_menu = document.querySelectorAll('.menu-option');
let logomenu = document.querySelector('.logo');
let icon = document.querySelector('.fa-bars');
let iconButton = document.querySelector('.i-menu');



function closemenu() {
    menu.classList.add('hidden-menu');
    logomenu.style.marginLeft = 39 + '%';  
    option_menu.forEach(c => {
        c.classList.remove('show');        
    });  
    icon.classList.add('fa-bars');  
    icon.classList.remove('fa-circle-xmark');
    
    iconButton.onclick = openmenu;
}

function openmenu() {
    menu.classList.remove('hidden-menu');
    logomenu.style.marginLeft = 0 + '%';  
    option_menu.forEach(c => {
        c.classList.add('show'); 
        c.addEventListener('click', function() {
            closemenu();
        });               
    });        
    icon.classList.add('fa-circle-xmark');    
    icon.classList.remove('fa-bars');
    
    iconButton.onclick = closemenu;
}


iconButton.onclick = openmenu;
}