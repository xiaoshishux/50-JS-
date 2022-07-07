//获取ID为add的标签
const addBtn = document.getElementById('add')
//将json数据转换为JavaScript对象
const notes = JSON.parse(localStorage.getItem('notes'))
//判断notes的值，若就循环遍历调用addNewNote函数
if (notes) {
    notes.forEach(note => addNewNote(note))
}
//为按钮添加点击事件，绑定addNewNote事件
addBtn.addEventListener('click', () => addNewNote())

function addNewNote(text = '') {
    //创建一个子节点的div标签
    const note = document.createElement('div')
    //为子节点div创建名为note的class
    note.classList.add('note')
    //为div添加内容模板字符串
    note.innerHTML = `
    <div class="tools">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>

    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea>
    `
    //获取名为 edit的标签
    const editBtn = note.querySelector('.edit')
    //获取名为 delete的标签
    const deleteBtn = note.querySelector('.delete')
    //获取名为 main的标签
    const main = note.querySelector('.main')
    //获取名为 textarea的标签
    const textArea = note.querySelector('textarea')

    textArea.value = text
    main.innerHTML = marked(text)
    //删除按钮添加点击事件，绑定删除事件
    deleteBtn.addEventListener('click', () => {
        note.remove()

        updateLS()
    })
    //编辑按钮添加点击事件，为mian标签创建hidden的class及为textArea标签创建hidden的class
    editBtn.addEventListener('click', () => {
        main.classList.toggle('hidden')
        textArea.classList.toggle('hidden')
    })

    textArea.addEventListener('input', (e) => {
        const { value } = e.target

        main.innerHTML = marked(value)

        updateLS()
    })

    document.body.appendChild(note)
}

function updateLS() {
    const notesText = document.querySelectorAll('textarea')

    const notes = []

    notesText.forEach(note => notes.push(note.value))

    localStorage.setItem('notes', JSON.stringify(notes))
}