

const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')

//为左边的ps添加鼠标移入的事件
left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
//为左边的ps添加鼠标移出的事件
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))


//为右边的xbox添加鼠标移入的事件
right.addEventListener('mouseenter', () => container.classList.add('hover-right'))
//为右边的xbox添加鼠标移出的事件
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))