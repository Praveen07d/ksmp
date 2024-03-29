// snowfall.js

document.addEventListener('DOMContentLoaded', function() {
    const numFlakes = 50;
    const flakesContainer = document.body;
    
    for (let i = 0; i < numFlakes; i++) {
        const flake = document.createElement('div');
        flake.classList.add('snowflake');
        flakesContainer.appendChild(flake);
        
        flake.style.left = `${Math.random() * 100}vw`;
        flake.style.animationDuration = `${Math.random() * 3 + 2}s`;
        flake.style.animationDelay = `${Math.random()}s`;
    }
});
