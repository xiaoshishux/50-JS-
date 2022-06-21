

//获取DOM树的class
const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

//为按钮创建点击事件
btn.addEventListener('click',() =>{
    //在search 后面添加 active样式
    search.classList.toggle('active')
    //为input框赋予焦点
    input.focus()
})