let ativo = true;

function toggleStatus() {
    const box = document.querySelector(".status-box");
    const text = document.getElementById("statusText");

    if (ativo) {
        box.style.background = "#ef4444";
        text.innerText = "Ameaça Detectada";
    } else {
        box.style.background = "#22c55e";
        text.innerText = "Seguro";
    }

    ativo = !ativo;
}

function scrollToSection() {
    document.getElementById("features").scrollIntoView({
        behavior: "smooth"
    });
}