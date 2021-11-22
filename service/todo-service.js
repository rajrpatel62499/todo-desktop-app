// const SqLiteService = require('./sqllite-service');

class TodoService {

    todos = [];
    sqliteService = new SqLiteService();
    tblName = 'todos'; // it's the same table name in the database.

    constructor() {
        this.fetchData();
    }

    fetchData() {
        this.findAll().then(res => {
            res ? this.todos = res : '';
        })
    }

    findAll(tblName) {
        return this.sqliteService.find(tblName);    
    }

    findById(id) {
        return this.sqliteService.findById(tblName, id);    
    }

    insert(todo) {
        return this.sqliteService.findById(tblName, todo);    
    }
    
    updateById(id, todo) {
        return this.sqliteService.update(tblName, id, todo);    
    }
    
    deleteById(id) {
        return this.sqliteService.remove(tblName, id);    
    }


}

module.exports = TodoService;