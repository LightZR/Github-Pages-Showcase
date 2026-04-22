// LOGIN
function login() {
    const user = document.getElementById("user").value;
    const pass = document.getElementById("pass").value;

    if (user === "admin" && pass === "1234") {
        localStorage.setItem("auth", "true");
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("error").innerText = "Credenciais erradas";
    }
}

// LOGOUT
function logout() {
    localStorage.removeItem("auth");
    window.location.href = "index.html";
}

// PROTEÇÃO
if (window.location.pathname.includes("dashboard")) {
    if (!localStorage.getItem("auth")) {
        window.location.href = "index.html";
    }
}

// DADOS SIMULADOS
function loadData() {
    document.getElementById("threats").innerText = 12;
    document.getElementById("events").innerText = 245;

    const logs = document.getElementById("logList");

    ["Scan completo", "Login admin", "Ameaça bloqueada"].forEach(text => {
        const li = document.createElement("li");
        li.innerText = text;
        logs.appendChild(li);
    });
}

// INIT
window.onload = () => {
    if (document.getElementById("threats")) {
        loadData();
    }
};