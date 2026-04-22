function login() {
    const user = document.getElementById("user");
    const pass = document.getElementById("pass");
    const error = document.getElementById("error");
    const btn = document.querySelector(".login-container button");

    btn.innerHTML = "A entrar...";
    btn.disabled = true;
    btn.style.opacity = "0.7";

    setTimeout(() => {
        if (user.value === "admin" && pass.value === "1234") {
            localStorage.setItem("auth", "true");
            window.location.href = "dashboard.html";
        } else {
            btn.innerHTML = "Entrar";
            btn.disabled = false;
            btn.style.opacity = "1";
            error.textContent = "Credenciais erradas";
            
            user.classList.add("error-shake");
            pass.classList.add("error-shake");
            setTimeout(() => {
                user.classList.remove("error-shake");
                pass.classList.remove("error-shake");
            }, 500);
        }
    }, 800);
}

function logout() {
    const btn = document.querySelector(".topbar button");
    btn.textContent = "A sair...";
    btn.disabled = true;
    
    setTimeout(() => {
        localStorage.removeItem("auth");
        window.location.href = "index.html";
    }, 500);
}

if (window.location.pathname.includes("dashboard")) {
    if (!localStorage.getItem("auth")) {
        window.location.href = "index.html";
    }
}

function loadData() {
    const threatsEl = document.getElementById("threats");
    const eventsEl = document.getElementById("events");
    const logList = document.getElementById("logList");

    let threats = 0;
    let events = 0;
    const targetThreats = 12;
    const targetEvents = 245;

    const animateCount = (el, target) => {
        const duration = 1500;
        const steps = 30;
        const increment = target / steps;
        let current = 0;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                el.textContent = target;
                clearInterval(timer);
            } else {
                el.textContent = Math.floor(current);
            }
        }, duration / steps);
    };

    setTimeout(() => animateCount(threatsEl, targetThreats), 100);
    setTimeout(() => animateCount(eventsEl, targetEvents), 300);

    const logMessages = [
        { text: "Scan completo", time: "2 min atrás" },
        { text: "Login admin", time: "5 min atrás" },
        { text: "Ameaça bloqueada", time: "12 min atrás" },
        { text: "Atualização de segurança", time: "1 hora atrás" },
        { text: "Verificação de firewall", time: "2 horas atrás" }
    ];

    logMessages.forEach((log, index) => {
        setTimeout(() => {
            const li = document.createElement("li");
            li.innerHTML = `<span>${log.text}</span><small>${log.time}</small>`;
            li.style.opacity = "0";
            li.style.transform = "translateX(-20px)";
            logList.appendChild(li);
            
            setTimeout(() => {
                li.style.opacity = "1";
                li.style.transform = "translateX(0)";
            }, 50);
        }, index * 150);
    });
}

window.onload = () => {
    if (document.getElementById("threats")) {
        loadData();
    }
};

document.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        login();
    }
});