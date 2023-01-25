AOS.init({
    once: true,
});

function fun() {
    document.getElementById('overlay').style.display = 'block'
    document.getElementById('html').style.overflow = 'hidden'
    document.getElementById('signForm').style.display = 'flex'
}

function fun2() {
    document.getElementById('overlay').style.display = 'none'
    document.getElementById('html').style.overflow = 'visible'
    document.getElementById('signForm').style.display = 'none'
}