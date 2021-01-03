let toggleNavStatus = false;

let toggleNav = function() {
    let getSidebar = document.querySelector(".nav-sidebar");
    let getSidebarItems= document.querySelector(".nav-sidebar .list-items");
    let getSidebarIcons = document.querySelector(".nav-sidebar .list-icons");

    if(toggleNavStatus === false){
        getSidebarItems.style.visibility = "visible";
        getSidebarIcons.style.visibility = "visible";
        getSidebar.style.width = "27rem";
        getSidebarIcons.style.width = "6rem";
        getSidebarItems.style.width = "20rem";

        toggleNavStatus = true; 
    }

    else if(toggleNavStatus === true){
        getSidebar.style.width = "6rem";
        getSidebarIcons.style.width = "6rem";
        getSidebarItems.style.visibility = "hidden";

        toggleNavStatus = false;
    }
}