let timer;
    let seconds = 0;

    function updateDisplay() {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        document.getElementById('display').textContent = 
            String(hours).padStart(2, '0') + ':' + 
            String(minutes).padStart(2, '0') + ':' + 
            String(secs).padStart(2, '0');
    }

    document.getElementById('start').addEventListener('click', () => {
        clearInterval(timer);
        timer = setInterval(() => {
            seconds++;
            updateDisplay();
        }, 1000);
    });

    document.getElementById('stop').addEventListener('click', () => {
        clearInterval(timer);
    });

    document.getElementById('reset').addEventListener('click', () => {
        clearInterval(timer);
        seconds = 0;
        updateDisplay();
    });