document.addEventListener("DOMContentLoaded", () => { // Correct syntax here
    const confettiContainer = document.querySelector(".confetti-container");
    for (let i = 0; i < 150; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.animationDelay = Math.random() * 3 + "s";
        confetti.style.backgroundColor = getRandomColor();
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        confettiContainer.appendChild(confetti);
    }

    const fireworksContainer = document.querySelector(".fireworks-container");
    for (let i = 0; i < 20; i++) {
        const firework = document.createElement("div");
        firework.classList.add("fireworks");
        const x = Math.random() * 100 + "vw";
        const y = Math.random() * 100 + "vh";
        firework.style.setProperty('--x', x);
        firework.style.setProperty('--y', y);
        fireworksContainer.appendChild(firework);
    }

    function getRandomColor() { // Moved function inside the script
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
}); // Closing parenthesis for the event listener