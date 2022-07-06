
//获取全部名为 faq-toggle的标签
const toggles = document.querySelectorAll('.faq-toggle')
//为每一个标签循环遍历添加一个点击事件，且动态生产元素（名为active）
toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})