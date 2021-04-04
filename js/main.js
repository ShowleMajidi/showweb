let tl = anime.timeline({
    easing: 'easeOutExpo',
    duration: 750,
});

tl.add({
    targets: '.x div',
    width: '100%',
    backgroundColor: 'rgba(156, 39, 176, 0.3)',
    delay: anime.stagger(100),
});
tl.add({
    targets: '.x div',
    width: '90%',
    backgroundColor: 'rgba(233, 30, 99, 0.1)',
    //   delay: anime.stagger(100),
});
tl.add({
        targets: 'h1',
        top: '20%',
        opacity: 1,
        duration: 4000,
    },
    '-=1600'
);

let rotateMe = anime({
    targets: '.x',
    scaleY: '2',
    scaleX: '2',
    translateX: '40%',
    rotate: '45deg',
    duration: 5000,
    autoplay: false,
});

document.querySelector('h1').addEventListener('mouseover', () => {
    rotateMe.play();
});

// ============contact===========
function validateForm() {
    var name = document.getElementById('name').value;
    if (name == '') {
        document.querySelector('.status').innerHTML = 'Name cannot be empty';
        return false;
    }
    var email = document.getElementById('email').value;
    if (email == '') {
        document.querySelector('.status').innerHTML = 'Email cannot be empty';
        return false;
    } else {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(email)) {
            document.querySelector('.status').innerHTML = 'Email format invalid';
            return false;
        }
    }
    var subject = document.getElementById('subject').value;
    if (subject == '') {
        document.querySelector('.status').innerHTML = 'Subject cannot be empty';
        return false;
    }
    var message = document.getElementById('message').value;
    if (message == '') {
        document.querySelector('.status').innerHTML = 'Message cannot be empty';
        return false;
    }
    document.querySelector('.status').innerHTML = 'Sending...';
}