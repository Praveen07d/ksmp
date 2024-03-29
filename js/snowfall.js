document.addEventListener('DOMContentLoaded', function() {
    const numSnowflakes = 50; // Number of snowflakes
    const container = document.body; // Container to append snowflakes

    for (let i = 0; i < numSnowflakes; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        container.appendChild(snowflake);
    }
});
