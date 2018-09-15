var interval;
var counter = 0.00;
var paused = true;

function startOrStop() {
    if (paused) {
        console.log('INICIADO');
        interval = setInterval(function() {
            counter = counter += 0.01;
    
            document.getElementById('display').innerHTML = counter;
        }, 100);

        paused = false;
    } else {
        console.log('PAUSADO');
        clearInterval(interval);
        paused = true;
    }
}