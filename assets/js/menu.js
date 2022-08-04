window.onload = () => {
    const logo = document.querySelector("#logo");
    const menu = document.querySelector("#menu");
    const menuIcon = document.querySelector("#menu-icon");

    console.log(1);

    menuIcon.addEventListener("click", function(){
        logo.classList.toggle("d-none");
        menu.classList.toggle("d-none");
        menu.classList.toggle("d-flex");
    })
    
}