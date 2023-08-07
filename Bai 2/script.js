function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getRandomGradient() {
    let color1 = getRandomColor();
    let color2 = getRandomColor();
    return `linear-gradient(${color1}, ${color2})`;
}

let colorPicker = document.getElementById('color-picker');
let gradientPicker = document.getElementById('gradient-picker');
let colorCode = document.getElementById('color-code');
let copyColor = document.getElementById('copy-color');

colorPicker.addEventListener('click', function() {
    let randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
    colorCode.innerText = randomColor;
});

gradientPicker.addEventListener('click', function() {
    let randomGradient = getRandomGradient();
    document.body.style.background = randomGradient;
    colorCode.innerText = randomGradient;
});

copyColor.addEventListener('click', function() {
    navigator.clipboard.writeText(colorCode.innerText).then(function() {
        alert('Mã màu đã được sao chép vào clipboard');
    }, function(err) {
        alert('Có lỗi xảy ra: ' + err);
    });
});
