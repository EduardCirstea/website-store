let menuItems = document.getElementById('menu-items');
menuItems.style.maxHeight = "0px";
document.querySelector('.menu-icon').addEventListener('click',() => {
    if(menuItems.style.maxHeight =="0px"){
        menuItems.style.maxHeight ="82vh"
    } else {
        menuItems.style.maxHeight = "0px";
    }
 
});
