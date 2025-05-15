 let startTime, elapsedTime = 0, timerInterval;

        // Load timer state from sessionStorage
        function loadTimer() {
            startTime = sessionStorage.getItem("startTime") ? parseInt(sessionStorage.getItem("startTime")) : null;
            elapsedTime = sessionStorage.getItem("elapsedTime") ? parseInt(sessionStorage.getItem("elapsedTime")) : 0;
            
            if (sessionStorage.getItem("running") === "true") {
                startTimer();
            } else {
                updateDisplay();
            }
        }

        function startTimer() {
            if (!startTime) {
                startTime = Date.now() - elapsedTime;
                sessionStorage.setItem("startTime", startTime);
            }
            sessionStorage.setItem("running", "true");
            timerInterval = setInterval(() => {
                elapsedTime = Date.now() - startTime;
                sessionStorage.setItem("elapsedTime", elapsedTime);
                updateDisplay();
            }, 1000);
        }

        function stopTimer() {
            clearInterval(timerInterval);
            sessionStorage.setItem("running", "false");
        }

        function resetTimer() {
            clearInterval(timerInterval);
            startTime = null;
            elapsedTime = 0;
            sessionStorage.removeItem("startTime");
            sessionStorage.removeItem("elapsedTime");
            sessionStorage.setItem("running", "false");
            updateDisplay();
        }

        function updateDisplay() {
            let totalSeconds = Math.floor(elapsedTime / 1000);
            let hours = Math.floor(totalSeconds / 3600);
            let minutes = Math.floor((totalSeconds % 3600) / 60);
            let seconds = totalSeconds % 60;
            document.getElementById("display").innerText =
                `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }

        window.onload = loadTimer;
