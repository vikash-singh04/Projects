const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const color = button.getAttribute("id");
        const body = document.querySelector("body");
        if (color === "grey") {
            body.style.backgroundColor = "grey";
        } else if (color === "white") {
            body.style.backgroundColor = "white";
        } else if (color === "blue") {
            body.style.backgroundColor = "blue";
        } else if (color === "yellow") {
            body.style.backgroundColor = "yellow";
        } else if (color === "green") {
            body.style.backgroundColor = "green";
        }
    })
})