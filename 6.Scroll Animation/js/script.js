


const boxes = document.querySelectorAll('.box')

//在window添加滚动事件
window.addEventListener('scroll',checkBoxes)

//调用checkBoxes方法
checkBoxes()


//创建checkBoxes方法
function checkBoxes(){
    //获取文档显示区的高度
    const triggerBottom = window.innerHeight/5 * 4;
    boxes.forEach( box =>{
        //获取box元素上边到视窗上边的距离
        const boxTop = box.getBoundingClientRect().top;
        //判断box元素上边到视窗上边的距离小于显示区的高度，就显示box，否则不显示box
        if(boxTop < triggerBottom){
            box.classList.add('show');
        }else{
            box.classList.remove('show')
        }
    })
}