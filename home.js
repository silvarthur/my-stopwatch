var interval;
var counter = 0;
var paused = true;
var recordTimeArray = [];

function startOrStop() {
    if (paused) {
        interval = setInterval(function() {
            counter++;
    
            document.getElementById('display').innerHTML = counter/100;
        }, 10);

        paused = false;
    } else {
        clearInterval(interval);
        paused = true;
    }
}

function reset() {
    location.reload()
}

function recordTime() {
    recordTimeArray.push(counter);

    if (counter == 0) {
        document.getElementById('recordedTimes').innerHTML += ('<br>' + '0.00');
    } else {
        document.getElementById('recordedTimes').innerHTML += ('<br>' + (counter/100));
    }
}

function updateRecordTimeList() {
    
}