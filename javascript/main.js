const header = document.getElementById("header");
const button = document.getElementById("tasks");

setTimeout(() => {
    header.style.marginTop = "0px";
    setTimeout(() => {
        header.style.transition = "200ms";
    }, 1000)
    

    button.style.opacity = "100";
    button.style.marginTop = "250px"
    setTimeout(() => {
        button.style.transition = "200ms";
    }, 1000)
}, 1000);