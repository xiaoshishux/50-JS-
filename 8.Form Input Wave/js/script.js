
//获取文档中 class=".form-control" 中的label 所有元素:
const labels = document.querySelectorAll('.form-control label')

//循环label标签中的内容字符串（Email，Password）
labels.forEach(label => {
    //将label标签中的内容字符串赋予带有html标签的内容
     label.innerHTML = label.innerText
     //将字符串转换数组
    .split('')
    //使用数组map方法返回新的数组，在新数组每一位数值创建span标签及样式
    .map((letter,idx)=>`<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
    //将数组转换字符串
    .join('')
})