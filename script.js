document.addEventListener('DOMContentLoaded', () => {
    const box = document.getElementById('colorBox');
    const text = document.getElementById('textIndicator');

    box.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        box.style.backgroundColor = 'orange';
        text.textContent = 'Right Click';
    });

    box.addEventListener('click', () => {
        box.style.backgroundColor = 'purple';
        text.textContent = 'Left Click';
    });

    box.addEventListener('wheel', (e) => {
        if (e.deltaY < 0) {
            box.style.backgroundColor = 'blue';
            text.textContent = 'Scroll Up';
        } else {
            box.style.backgroundColor = 'maroon';
            text.textContent = 'Scroll Down';
        }
    });
});
