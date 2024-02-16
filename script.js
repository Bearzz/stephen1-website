document.addEventListener('DOMContentLoaded', function() {
    console.log("Stephen1.com sample project loaded.");
});

document.addEventListener('DOMContentLoaded', function() {
    const hour = new Date().getHours();
    let greeting;

    if (hour < 12) {
        greeting = "Good morning";
    } else if (hour < 18) {
        greeting = "Good afternoon";
    } else {
        greeting = "Good evening";
    }

    document.getElementById('greeting').innerText = `${greeting}! Welcome to Stephen1.com.`;
});
