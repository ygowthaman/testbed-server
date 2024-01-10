# Node Server

Run using the command `node server.js`

## Database Setup

watchtower.db is already created.
Once npm install is run, make sure sqlite3 is running
Enter `sqlite3` and get

`SQLite version 3.31.1 2020-01-27 19:55:54`
`Enter ".help" for usage hints.`
`Connected to a transient in-memory database.`
`Use ".open FILENAME" to reopen on a persistent database.`
`sqlite> `

If this is not output, DB might need installation/configuration. TIP: Use Google

Enter `sqlite3 watchtower` to navigate to the database.

Create tables and insert data if necessary.
CREATE TRABLE story (id INTEGER PRIMARY KEY ASC AUTOINCREMENT, title TEXT NOT NULL, author TEXT NOT NULL, private BOOLEAN TEXT NOT NULL, description TEXT, created_at TEXT NOT NULL)
