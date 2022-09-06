let saveSet = document.getElementById("save-set");
let countEl = document.getElementById("count-el");
let saveWorkout = document.getElementById("save-workout");
let count = 0;

function setPlusOne() {
    count += 1
    countEl.textContent = "Set: " + count
}

function save(setOrWorkout) {
    let countStr = count + " - "
    if (setOrWorkout == 1) {
        saveSet.textContent += countStr;
        countEl.textContent = 0;
        count = 0;
    } else if (setOrWorkout == 2) {
        saveWorkout.textContent += countStr;
        countEl.textContent = 0;
        count = 0 ;
    } else if (setOrWorkout == 3){
        // saveSet.textContent = " Previous Set: "
        // saveWorkout.textContent = "Previous Workout: ";
        countEl.textContent = 0;
        count = 0;
    } else if (setOrWorkout == 4) {
        // saveSet.textContent = " Previous Set: "
        // saveWorkout.textContent = "Previous Workout: ";
        countEl.textContent = 0;
        count = 0;
    }

}

function restart(setOrWorkout) {
    if (setOrWorkout == 1) {
        saveSet.textContent = " Previous Set: "
        // saveWorkout.textContent = "Previous Workout: ";
        countEl.textContent = 0;
        count = 0;
    } else if (setOrWorkout == 2) {
        // saveSet.textContent = " Previous Set: "
        saveWorkout.textContent = "Previous Workout: ";
        countEl.textContent = 0;
        count = 0;
    }

}