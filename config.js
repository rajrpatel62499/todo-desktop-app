module.exports = {
    sqliteConfig: {
        client: 'sqlite3',
        connection: {
          filename: "../todos.sqlite"
        },
        useNullAsDefault: true
    }
}