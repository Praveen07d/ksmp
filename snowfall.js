// snowfall.js

// Function to generate random number within a range
function randomRange(min, max) {
    return Math.random() * (max - min) + min;
}

// Create a snowflake
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.position = 'fixed';
    snowflake.style.top = '-10px'; // Start above the viewport
    snowflake.style.left = `${randomRange(0, window.innerWidth)}px`; // Random horizontal position
    snowflake.style.width = '10px';
    snowflake.style.height = '10px';
    snowflake.style.background = 'rgba(255, 255, 255, 0.8)'; // White with slight transparency
    snowflake.style.borderRadius = '50%';
    snowflake.style.filter = 'blur(2px)'; // Adding a blur for the glow effect
    snowflake.style.zIndex = '9999'; // Ensure snowflakes are above other elements
    snowflake.style.transition = 'filter 0.5s'; // Smooth transition for glow effect
    document.body.appendChild(snowflake);

    // Add mouse hover event listener
    snowflake.addEventListener('mouseover', function() {
        this.style.filter = 'blur(5px)'; // Increase blur for glow effect on hover
    });

    snowflake.addEventListener('mouseout', function() {
        this.style.filter = 'blur(2px)'; // Reset blur on mouse out
    });

    return snowflake;
}

// Make snowflakes fall
function snowfall() {
    const snowflakes = [];

    // Create 50 snowflakes
    for (let i = 0; i < 50; i++) {
        const snowflake = createSnowflake();
        snowflakes.push(snowflake);
    }

    // Make the snowflakes fall
    function animateSnowflakes() {
        snowflakes.forEach((snowflake, index) => {
            const x = parseFloat(snowflake.style.left);
            const y = parseFloat(snowflake.style.top);

            snowflake.style.top = `${y + randomRange(1, 3)}px`; // Fall speed
            snowflake.style.left = `${x + Math.sin(y / 50) * 2}px`; // Horizontal movement

            // If snowflake goes below the viewport, reset its position
            if (y > window.innerHeight) {
                snowflake.style.top = '-10px';
                snowflake.style.left = `${randomRange(0, window.innerWidth)}px`;
            }
        });

        requestAnimationFrame(animateSnowflakes);
    }

    animateSnowflakes();
}

// Start snowfall
snowfall();
