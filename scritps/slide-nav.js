const isVisibleClass = "is-visible";
const isActiveClass = "is-active";


function mobileMenu(){
    const pageHeader = document.querySelector(".page-header");
    const toggleMenu = pageHeader.querySelector(".toggle-menu");
    const menuWrapper = pageHeader.querySelector(".menu-wrapper");
    const level1Links = pageHeader.querySelectorAll(".level-1 > li > a");
    const listWrapper2 = pageHeader.querySelector(".list-wrapper:nth-child(2)");
    const listWrapper3 = pageHeader.querySelector(".list-wrapper:nth-child(3)");
    const subMenuWrapper2 = listWrapper2.querySelector(".sub-menu-wrapper");
    const subMenuWrapper3 = listWrapper3.querySelector(".sub-menu-wrapper");
    const backOneLevelBtns = pageHeader.querySelectorAll(".back-one-level");

    // Look for .hamburger icon
    var hamburger = document.querySelector(".hamburger");
    
    
    toggleMenu.addEventListener("click", function () {
        menuWrapper.classList.toggle(isVisibleClass);
        if (!this.classList.contains(isVisibleClass)) {
            listWrapper2.classList.remove(isVisibleClass);
            listWrapper3.classList.remove(isVisibleClass);
            const menuLinks = menuWrapper.querySelectorAll("a");
            for (const menuLink of menuLinks) {
                menuLink.classList.remove(isActiveClass);
            }
        }
        hamburger.classList.toggle("is-active");
    });
    
    for (const level1Link of level1Links) {
        level1Link.addEventListener("click", function (e) {
            const siblingList = level1Link.nextElementSibling;
            if (siblingList) {
                e.preventDefault();
                this.classList.add(isActiveClass);
                const cloneSiblingList = siblingList.cloneNode(true);
                subMenuWrapper2.innerHTML = "";
                subMenuWrapper2.append(cloneSiblingList);
                listWrapper2.classList.add(isVisibleClass);
            }
        });
    }
    
    listWrapper2.addEventListener("click", function (e) {
        const target = e.target;
        if (target.tagName.toLowerCase() === "a" && target.nextElementSibling) {
            const siblingList = target.nextElementSibling;
            e.preventDefault();
            target.classList.add(isActiveClass);
            const cloneSiblingList = siblingList.cloneNode(true);
            subMenuWrapper3.innerHTML = "";
            subMenuWrapper3.append(cloneSiblingList);
            listWrapper3.classList.add(isVisibleClass);
        }
    });
    
    for (const backOneLevelBtn of backOneLevelBtns) {
        backOneLevelBtn.addEventListener("click", function () {
            const parent = this.closest(".list-wrapper");
            parent.classList.remove(isVisibleClass);
            parent.previousElementSibling
                .querySelector(".is-active")
                .classList.remove(isActiveClass);
        });
    }

}

function desktopMenu() {
    const pageHeader = document.querySelector(".page-header");

    //parent of the main menu
    const menuWrapper = pageHeader.querySelector(".list-wrapper-main");
    //container for the main menu
    const menuWrapperDesktop = pageHeader.querySelector(".list-wrapper-desktop");
    let cloneSiblingMenu = menuWrapper.cloneNode(true);
    //copying nodes to main menu
    menuWrapperDesktop.innerHTML = "";
    menuWrapperDesktop.append(cloneSiblingMenu);

    const level1Links = pageHeader.querySelectorAll(".level-1 > li > a");

    //const listWrapper2 = pageHeader.querySelector(".sub-menu.level-2");

    for (const level1Link of level1Links) {
        level1Link.addEventListener("click", function (e) {
            const siblingList = level1Link.nextElementSibling;
            if (siblingList) {
                e.preventDefault();
                console.log("DESKTOP MENU");
                this.classList.toggle(isActiveClass);
                this.nextElementSibling.classList.toggle(isVisibleClass);
            }
        });
    }

}



document.addEventListener('click', function (event) {
    if (!event.target.closest('.list-wrapper-main')) {
        // Clicked outside the element...
        console.log("SAIU FORAAAAA");
        this.classList.toggle(isActiveClass);
    }
}, false);


//TODO:OPTIMIZAR O RESIZE E COLOCAR UM DELAY NO EVENTO

// function resizeEventMenu() {
//     // Define our viewportWidth variable
//     var viewportWidth;
    
//     // Set/update the viewportWidth value
//     var setViewportWidth = function () {
//         viewportWidth = window.innerWidth || document.documentElement.clientWidth;
//     }
    
//     // Log the viewport width into the console
//     var desktopWidth = function () {
//         if (viewportWidth > 960) {
//             desktopMenu()
//             //alert("desktop");
//             console.log("desktop");
//         } else {
//             //alert("mobile");
//             console.log("mobile");
//         }
//     }
    
//     // On resize events, recalculate and log
//     window.addEventListener('resize', function () {
//         setViewportWidth();
//         desktopWidth();
//     }, false);
    
//     // Set our initial width and log it
//     setViewportWidth();
//     desktopWidth();
// }


mobileMenu();
desktopMenu();
//resizeEventMenu();