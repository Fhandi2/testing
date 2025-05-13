const navmenu = document.querySelector('.nav-menu');
document.querySelector('#humberger-menu').onclick = () => {
    navmenu.classList.toggle('aktif')
}



const navhumb = document.querySelector('#humberger-menu');
document.addEventListener('click', function(a) {
    if(!navhumb.contains(a.target) && !navmenu.contains(a.target)) {
        navmenu.classList.remove('aktif');
    }
})