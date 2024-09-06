$(document).ready(function() {
    $('#changeTextButton').click(function() {
        $(this).text('Image Changed!');
    });

   
    $('body').css({
        'background-image':'url("img/5.jpg")',
        'background-repeat': 'no-repeat',
        'background-size': 'cover',
        'background-position': 'center'

    });

    
    $('#submitForm').click(function() {
        var username = $('#username').val();
        var email = $('#email').val();
        alert('Username: ' + username + '\nEmail: ' + email);
    });

 
    $('#removeButton').attr('title', 'Click to remove the info');
});

function change() {
    const title = document.getElementById('title');
    title.innerHTML = 'A Home away from Home..................';
    title.style.color = 'cyan';
    title.style.textAlign='center';
}

function changeImage() {
    const image = document.getElementsByClassName('image')[0];
    image.src = 'img/2.jpg';
}

function addTextNode() {
    const parent = document.getElementById('parentNode');
    const newText = document.createTextNode(' There is a lazy cat in this hostel.');
    parent.appendChild(newText);
}

function removeNode() {
    const parent = document.getElementById('parentNode');
    parent.textContent = "Click to know a useless information!";
}
