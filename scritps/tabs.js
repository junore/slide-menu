function tabify(target) {
    // (A) GET HEADERS & CONTENTS
    let wrapper = document.getElementById(target),
        header = document.querySelector(`#${target} .sub-menu.level-2`);
        headtabs = document.querySelectorAll(`#${target} .sub-menu.level-2 a.level-2-link`);
        bodytabs = document.querySelectorAll(`#${target} .sub-menu.level-2 .sub-menu.level-3`);

    // (B) ADD CSS + ONCLICK TOGGLE
    wrapper.classList.add("tab__wrap");
    header.classList.add("tab__head");
    for (let i = 0; i < headtabs.length; i++) {
        bodytabs[i].classList.add("tab__body");
        headtabs[i].onclick = () => {
            for (let j = 0; j < headtabs.length; j++) {
                if (i == j) {
                    headtabs[j].classList.add("open");
                    bodytabs[j].classList.add("open");
                } else {
                    headtabs[j].classList.remove("open");
                    bodytabs[j].classList.remove("open");
                }
            }
        };
    }

    // (C) SET DEFAULT OPEN TAB IF NONE IS DEFINED
    if (wrapper.querySelector(".open") == null) {
        headtabs[0].classList.add("open");
        bodytabs[0].classList.add("open");
    }
}