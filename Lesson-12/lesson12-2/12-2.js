const container = document.getElementById('container');

container.addEventListener('click',function(event) {
    if (event.target.classList.contains('child-1')) {
        alert('Button 1 clicked');
    }
    else if (event.target.classList.contains('child-2')) {
        alert('Button 2 clicked');
    }
    else {
        alert('Button 3 clicked');
    }

})