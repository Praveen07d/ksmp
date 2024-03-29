/* media/style.css */

body {
    overflow: hidden; /* Prevents the snowflakes from overflowing the viewport */
}

.snowflake {
    position: fixed;
    top: -10px; /* Start position */
    z-index: 1000; /* Ensures the snowflakes stay on top of other content */
    width: 10px;
    height: 10px;
    background: white;
    border-radius: 50%;
    animation: snowfall linear infinite;
}

@keyframes snowfall {
    0% {
        transform: translateY(-10px) rotate(0deg);
    }
    100% {
        transform: translateY(100vh) rotate(360deg);
    }
}
