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

// NAVEGAÇÃO ENTRE SECÇÕES
function showSection(section) {
    document.getElementById("dashboardSection").classList.add("hidden");
    document.getElementById("alertsSection").classList.add("hidden");
    document.getElementById("logsSection").classList.add("hidden");

    document.querySelectorAll(".nav-link").forEach(el => el.classList.remove("active"));

    if (section === "dashboard") {
        document.getElementById("dashboardSection").classList.remove("hidden");
    }

    if (section === "alerts") {
        document.getElementById("alertsSection").classList.remove("hidden");
    }

    if (section === "logs") {
        document.getElementById("logsSection").classList.remove("hidden");
    }
}

// DADOS SIMULADOS
function loadData() {
    document.getElementById("threats").innerText = 12;
    document.getElementById("events").innerText = 245;

    const logs = document.getElementById("logList");
    const alerts = document.getElementById("alertList");

    ["Scan completo", "Login admin", "Ameaça bloqueada"].forEach(text => {
        const li = document.createElement("li");
        li.innerText = text;
        logs.appendChild(li);
    });

    ["IP suspeito detetado", "Tentativa de login falhada", "Port scan bloqueado"].forEach(text => {
        const li = document.createElement("li");
        li.innerText = text;
        alerts.appendChild(li);
    });
}

// GRÁFICO
function loadChart() {
    const ctx = document.getElementById("activityChart");

    new Chart(ctx, {
        type: "line",
        data: {
            labels: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"],
            datasets: [{
                label: "Eventos de Segurança",
                data: [12, 19, 7, 15, 22, 30, 18],
                borderColor: "#3b82f6",
                backgroundColor: "rgba(59,130,246,0.2)",
                tension: 0.4
            }]
        },
        options: {
            responsive: true
        }
    });
}

// INIT
window.onload = () => {
    if (document.getElementById("threats")) {
        loadData();
        loadChart();
    }
};