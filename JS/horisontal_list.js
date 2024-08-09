    const scrollers = document.querySelectorAll(".selector");

if (!window.matchMedia ("(prefers-reduced-motion:reduce)").matches) {
    addAnimation();
}

function addAnimation(){
    scrollers.forEach( (scrollers) => {
        scrollers.setAttribute("data-animated", true);

        const scrollInner = document.querySelector(".list_uni");
        const scrollContent = Array.from(scrollInner.children);

        scrollContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden",true);
        scrollInner.appendChild(duplicatedItem);
        });
    });
}

export default addAnimation;