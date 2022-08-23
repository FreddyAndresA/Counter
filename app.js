let count = 0;
let value = document.querySelector('.value');
let buttons = document.querySelectorAll('button');

buttons.forEach(function(button) {
    button.addEventListener('click', function(e) {
        const tap = e.currentTarget.classList;
        
        if(tap.contains("decrease")) {
            count--;
        }
        else if(tap.contains("increase")) {
            count++;
        }
        else {
            count = 0;
        }

        if(count < 0) {
            value.style.color = '#F283A5';
        }
        if(count > 0) {
            value.style.color = '#72CAAF';
        }
        if(count == 0) {
            value.style.color = '#53657D';
        }

        value.textContent = count;
    })
})