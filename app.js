
/* ===========================================
START JAVASCRIPT 5 PROJECT 
============================================== */
let count = 0;
let value = document.querySelector('#value')
let bttns = document.querySelectorAll('.bttn');

//loop
/****** WHAT DOES E MEAN AT FUNCTIONS ******/
// THE ANSWER : 
// "function(e)" is the event handling function 
// (on event, object is created) "e" is the object handler (object is made accessible)..

bttns.forEach(function (item0) {
    item0.addEventListener('click', function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')) {
            count--;
        } else if (styles.contains('increase')) {
            count++;
        } else {
            count = 0;
        }
        count > 0 ? value.style.color = "green" :
            count < 0 ? value.style.color = "red" : value.style.color = "#222";
        value.textContent = count;
    })
});


/* =========================================== 
END JAVASCRIPT 5 PROJECT 
============================================== */