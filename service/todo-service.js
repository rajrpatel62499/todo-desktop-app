const SqLiteService = require('./sqllite-service');

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

    findAll() {
        return this.sqliteService.find(this.tblName);    
    }

    findById(id) {
        return this.sqliteService.findById(this.tblName, id);    
    }

    insert(todo) {
        return this.sqliteService.findById(this.tblName, todo);    
    }
    
    updateById(id, todo) {
        return this.sqliteService.update(this.tblName, id, todo);    
    }
    
    deleteById(id) {
        return this.sqliteService.remove(this.tblName, id);    
    }


}

module.exports = TodoService;