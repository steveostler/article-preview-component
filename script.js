const share = document.querySelector("#share");
const shareIcon = document.querySelectorAll(".share-icon");


for (let i = 0; i < shareIcon.length; i++) {
    shareIcon[i].addEventListener("click", () => {
        share.classList.value = 
        share.classList.value === "share slide-out"
            ? "share slide-up"
            : "share slide-out";
    });
}
