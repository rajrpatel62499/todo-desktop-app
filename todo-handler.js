const { ipcMain, ipcRenderer } = require("electron");
const TodoService = require("./service/todo-service");
const _todoService = new TodoService();

// schema for data 
// {
//     eventType: String, 
//     data: 
// }
async function todoHandler(event,data) {

    if (data.eventType == 'addTodo') {

    } else if (data.eventType == 'updateTodo') {

    } else if (data.eventType == 'deleteTodo') {
        
    } 
    else if (data.eventType == 'getAllTodos') {
        console.log("return all todos");
        
        _todoService.findAll().then(res => {
            console.log(res);
        }).catch(err => {
            // ipcMain.send("receiveTodos", res );
            event.sender.send("receiveTodos", res)
            console.log(err);
        })

    }
}


// module.exports.todoHandler = async (event,data) => {
//     const _todoService = new TodoService();

//     if (data.eventType == 'addTodo') {

//     } else if (data.eventType == 'updateTodo') {

//     } else if (data.eventType == 'deleteTodo') {
        
//     } else if (data.eventType == 'getAllTodos') {
//         console.log("return all todos");
//         const todos = await _todoService.findAll();
//         ipcMain.emit("receiveTodos", todos );

//     }

// }

module.exports.todoHandler = todoHandler;