

    console.log("DESKTOP MENU");

    const isVisibleClass = "is-visible";
    const isActiveClass = "is-active";

    function desktopMenu() {
        const pageHeader = document.querySelector(".page-header");

        //parent of the main menu
        const menuWrapper = pageHeader.querySelector(".list-wrapper");
        //container for the main menu
        const menuWrapperDesktop = pageHeader.querySelector(".list-wrapper-desktop");
        let cloneSiblingMenu = menuWrapper.cloneNode(true);
        //copying nodes to main menu
        menuWrapperDesktop.innerHTML = "";
        menuWrapperDesktop.append(cloneSiblingMenu);

        const level1Links = pageHeader.querySelectorAll(".level-1 > li > a");

        

        for (const level1Link of level1Links) {
            level1Link.addEventListener("click", function (e) {
                const siblingList = level1Link.nextElementSibling;
                if (siblingList) {
                    e.preventDefault();
                    console.log("DESKTOP MENU");
                    
                    const boxes = document.querySelectorAll('.sub-menu.is-visible');
                    const links = document.querySelectorAll('.menu.level-1 > li > a');
                    boxes.forEach(box => {
                        console.log("FINALENTE");
                        // Remove class from each element
                        box.classList.remove(isVisibleClass);
                    });
                    links.forEach(link => {
                        console.log("FINALENTE");
                        // Remove class from each element
                        link.classList.remove(isActiveClass);
                    });
                    
                    this.classList.toggle(isActiveClass);
                    this.nextElementSibling.classList.toggle(isVisibleClass);
                }
            });
        }

    }
    function removeActiveMenus() {
        document.addEventListener('click', function (event) {
            const boxes = document.querySelectorAll('.sub-menu.level-2');
            const links = document.querySelectorAll('.menu.level-1 > li > a');
            if (!event.target.closest('.menu.level-1')) {
                // Clicked outside the element...
                console.log("SAIU FORAAAAA");
                //this.classList.toggle(isActiveClass);
                boxes.forEach(box => {
                    // Remove class from each element
                    box.classList.remove(isVisibleClass);
        
                    // Add class to each element
                    // box.classList.add('small');
                });
                links.forEach(link => {
                    console.log("FINALENTE");
                    // Remove class from each element
                    link.classList.remove(isActiveClass);
                });
            }
        }, false);

    }


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

    desktopMenu();
    removeActiveMenus()
    //resizeEventMenu();




// if (window.innerWidth > 960) {
// }