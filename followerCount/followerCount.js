let count = 0; 
function increaseCount() {
    count++;
    displayCount();
    checkCountValue();
}

function displayCount() {
    document.getElementById('countDisplay').innerHTML = count;
}

function checkCountValue() {
    if (count===10) {
        alert("Your Instagram post gained 10 followers!!");
    }
    if (count === 20) {
        alert("Your Instagram post reached 20 followers!!");
    }
}

function resetCount() {
    count = 0;
    document.getElementById('countDisplay').innerHTML = count;
}