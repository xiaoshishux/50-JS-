//创建一个sounds数组
const sounds = ['applause','boo', 'gasp','tada','victory','wrong'];

//sounds数组进行循环
 sounds.forEach(sound => {
     //创建一个由标签名称 button 指定的 HTML 元素
     const btn = document.createElement('button')
     //为 <button> 元素添加名称为 ‘btn’的class
     btn.classList.add('btn');
    //在 <button> 元素创建文本内容
     btn.innerText = sound;
    //为每个按钮创建点击事件
     btn.addEventListener('click',() => {
         //调用stopSongs()
            stopSongs()
            //获取ID为btn元素添加播放
            document.getElementById(sound).play()
     })
     //获取ID为btn元素后面添加一个子元素节点
     document.getElementById('buttons').appendChild(btn)
 })


 function stopSongs(){
    //sounds数组进行循环
     sounds.forEach(sound =>{
         // 获取id为btn的元素
         const song = document.getElementById(sound)
        //暂停媒体的播放
         song.pause()
         //以秒为单位返回当前媒体元素的播放时间
         song.currentTime = 0
     })
 }