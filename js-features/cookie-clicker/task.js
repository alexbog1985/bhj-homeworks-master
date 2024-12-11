(() => {
    const cookie = document.getElementById('cookie');
    let clickCount = document.getElementById('clicker__counter');

    cookie.onclick = () => {
        clickCount.textContent++;
        cookie.width <= 200 ? cookie.width += 20 : cookie.width -= 20;
    }

})()