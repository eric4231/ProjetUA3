
const acc_img = document.getElementById('acc_img')
const acc_back = document.getElementById('acc_back')

acc_img.addEventListener('mouseover', function() {
    acc_back.style.transitionDuration = '2s'
    acc_img.style.transitionDuration = '2s'
    acc_back.style.backgroundColor = '#333'
})

acc_img.addEventListener('mouseleave', function() {
    acc_back.style.transitionDuration = '1s'
    acc_img.style.transitionDuration = '1s'
    acc_back.style.backgroundColor = 'white'
})