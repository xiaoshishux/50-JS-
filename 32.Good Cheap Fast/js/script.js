// 获取全部名为toggle的标签
const toggles = document.querySelectorAll('.toggle')
// 获取全部id名为good的标签
const good = document.querySelector('#good')
// 获取全部id名为cheap的标签
const cheap = document.querySelector("#cheap")
// 获取全部id名为fast的标签
const fast = document.querySelector('#fast')

//循环遍历为每一个toggle标签添加点击事件，并调用doTheTrick函数
toggles.forEach(toggle => toggle.addEventListener('change', (e) => doTheTrick(e.target)))
//判断按钮（input）二免一的选择状态函数
function doTheTrick(theClickedOne) {
    if (good.checked && cheap.checked && fast.checked) {
        // 若点击按钮（good），则按钮（fast）关闭
        if (good === theClickedOne) {
            fast.checked = false
        }
        // 若点击按钮（cheap），则按钮（good）关闭
        if (cheap === theClickedOne) {
            good.checked = false
        }
        // 若点击按钮（fast），则按钮（cheap）关闭
        if (fast === theClickedOne) {
            cheap.checked = false
        }
    }
}