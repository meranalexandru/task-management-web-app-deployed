const express = require('express')
const app = express()

require('dotenv').config()
app.use(express.json())
const port = process.env.PORT || 5000

const dbConfig = require('./config/dbConfig')
const usersRoute = require("./routes/usersRoute");
const projectsRoute = require("./routes/projectsRoute");
const tasksRoute = require("./routes/tasksRoute");

app.listen(port, () => console.log(`Node server listening on port ${port}`))
app.use("/api/users", usersRoute);
app.use("/api/projects", projectsRoute);
app.use("/api/tasks", tasksRoute);
