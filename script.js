// LOGIN FAKE
function login() {
    const user = document.getElementById("user").value;
    const pass = document.getElementById("pass").value;

    if (user === "admin" && pass === "1234") {
        localStorage.setItem("auth", "true");
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("error").innerText = "Credenciais inválidas";
    }
}

// LOGOUT
function logout() {
    localStorage.removeItem("auth");
    window.location.href = "index.html";
}

// PROTEÇÃO
if (window.location.pathname.includes("dashboard.html")) {
    if (!localStorage.getItem("auth")) {
        window.location.href = "index.html";
    }
}

// FETCH FAKE (simulação API)
async function loadData() {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json());

    document.getElementById("threats").innerText = data.length;
    document.getElementById("events").innerText = data.length * 3;

    const logs = document.getElementById("logs");

    data.slice(0,5).forEach(item => {
        const li = document.createElement("li");
        li.innerText = item.title;
        logs.appendChild(li);
    });
}

// CHART
function loadChart() {
    const ctx = document.getElementById("chartCanvas");

    if (!ctx) return;

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Seg','Ter','Qua','Qui','Sex'],
            datasets: [{
                label: 'Ameaças',
                data: [3,7,5,10,6]
            }]
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