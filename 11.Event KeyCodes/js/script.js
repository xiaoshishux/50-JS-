
//获取ID为insert的标签
const insert = document.getElementById('insert')
//为windows添加点击事件，及创建模板字符串的方法
window.addEventListener('keydown', (event) => {
    insert.innerHTML = `
    <div class="key">
    ${event.key === '' ? 'Space' : event.key}
    <small>event.key</small>
    </div>
    
    <div class = "key">
    ${event.keyCode}
    <small>event.keyCode</small>
    </div>

    <div class = "key">
    ${event.code}
    <small>event.code</small>
    </div>
    `
})