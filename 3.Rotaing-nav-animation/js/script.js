
//获取dom树的ID
const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

//为open按钮创建点击事件，点击open按钮时显示菜单栏(在class为container后面添加show-nav)
open.addEventListener('click', () => container.classList.add('show-nav'))
//为close按钮创建点击事件，点击close按钮时隐藏菜单栏(在class为container后面删除show-nav)
close.addEventListener('click', () => container.classList.remove('show-nav'))