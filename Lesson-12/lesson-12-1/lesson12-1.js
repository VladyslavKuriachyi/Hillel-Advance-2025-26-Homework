let savedUrl = null;


document.getElementById("saveBtn").addEventListener("click", () => {
    savedUrl = window.prompt("enter a URL");
    if (savedUrl) {
        document.getElementById("changeBtn").disabled = false;
    }
});

document.getElementById("changeBtn").addEventListener("click", () => {
    if (!savedUrl) {
        window.open(savedUrl, "_blank");
    }
});