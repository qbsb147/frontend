const underGreen = document.getElementsByClassName('underGreen');
const bottom = document.getElementsByClassName('bottom');

// 모든 하위 메뉴를 표시
for (let i = 0; i < underGreen.length; i++) {
    underGreen[i].addEventListener('mouseenter', function() {
        for (let j = 0; j < bottom.length; j++) {
            bottom[j].style.display = 'block'; // 모든 하위 메뉴 표시
        }
    });

    underGreen[i].addEventListener('mouseleave', function() {
        for (let j = 0; j < bottom.length; j++) {
            bottom[j].style.display = 'none'; // 모든 하위 메뉴 숨김
        }
    });
}