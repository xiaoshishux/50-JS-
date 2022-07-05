//获取ID为joke元素
const jokeEl = document.getElementById('joke')
//获取ID为jokeBtn元素
const jokeBtn = document.getElementById('jokeBtn')
//给按钮（jokeBtn）添加点击事件，并调用generateJoke函数
jokeBtn.addEventListener('click', generateJoke)
//调用generateJoke函数
generateJoke()
//利用async/await方式实现异步调用的函数
async function generateJoke() {
    //添加头部信息
    const config = {
        headers: {
            Accept: 'application/json'
        },
    }
    //发送fetch的请求及头部信息，再执行下一步
    const res = await fetch('https://icanhazdadjoke.com', config)
    //等待res的响应结果数据data，再执行下一步
    const data = await res.json()
    //在ID为jokeEl的标签中更新响应数据
    jokeEl.innerHTML = data.joke

}