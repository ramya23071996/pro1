        let timer;
        let seconds = 0;
        let running = false;

       document.getElementById("but1").addEventListener("click",function() {
            if (!running) {
                running = true;
                timer = setInterval(() => {
                    seconds++;
                    document.getElementById("display").innerText = seconds;
                }, 1000);
            }
        }) 
         document.getElementById("but2").addEventListener("click", function() {
            running = false;
            clearInterval(timer);
        })
       
        document.getElementById("but3").addEventListener("click",  function() {
            running = false;
            clearInterval(timer);
            seconds = 0;
            document.getElementById("display").innerText = seconds;
        })
      