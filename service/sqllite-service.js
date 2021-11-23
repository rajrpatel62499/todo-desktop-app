const knex = require('knex');
const { sqliteConfig } = require("../config");

const db = knex({
  client: 'sqlite3',
  connection: {
    filename: "../todos.sqlite"
  },
  useNullAsDefault: true
});

class SqLiteService {

  constructor() {}
  
  find(tblName) {
    return db(tblName);
  }

  findById(tblName, id) {
    return db(tblName).where({ id: Number(id)});
  }
  
  insert(tblName, todo) {
    return db(tblName)
            .insert(todo)
            .then(ids => ( {id: ids[0]} ))
  }
  
  update(tblName, id, todo) {
    return db(tblName)
            .where('id', Number(id))
            .update(todo);
  }
  
  
  remove(tblName, id) {
    return db(tblName)
            .where('id', Number(id))
            .del(todo);
  }

} 

const sql = new SqLiteService();
sql.find('todos').then(res => {
  console.log(res);
})

module.exports = SqLiteService;