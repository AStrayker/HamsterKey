let balance = 6;

function generateKey() {
    if (balance <= 0) return;
    
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let key = "BIKE-";
    
    for (let i = 0; i < 4; i++) {
        key += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    
    key += "-";
    
    for (let i = 0; i < 4; i++) {
        key += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    
    document.getElementById("keyDisplay").value = key;
    
    balance--;
    document.getElementById("balance").textContent = "Balance: " + balance;
}

function copyKey() {
    const key = document.getElementById("keyDisplay");
    key.select();
    document.execCommand("copy");
    alert("Key copied to clipboard");
}

function showInfo() {
    document.getElementById("infoPopup").style.display = "block";
}

function closeInfo() {
    document.getElementById("infoPopup").style.display = "none";
}

function startTimer() {
    const generateBtn = document.getElementById("generateBtn");
    const randomTime = Math.floor(Math.random() * 6) + 2; // Рандом от 2 до 7 минут
    const endTime = Date.now() + randomTime * 60000;

    generateBtn.classList.add("disabled");
    generateBtn.disabled = true;

    const interval = setInterval(() => {
        const timeLeft = Math.max(0, endTime - Date.now());
        const minutes = Math.floor(timeLeft / 60000);
        const seconds = Math.floor((timeLeft % 60000) / 1000);
        document.getElementById("timer").textContent = 
            `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

        if (timeLeft <= 0) {
            clearInterval(interval);
            generateBtn.classList.remove("disabled");
            generateBtn.disabled = false;
        }
    }, 1000);
}

window.onload = startTimer;
