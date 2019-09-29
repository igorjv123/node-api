const user = require("./user");
const task = require("./task");
const list = require("./list");
const board = require("./board");

module.exports = function(app) {
    app.use("/api/users", user);
    app.use("/api/tasks", task);
    app.use("/api/lists", list);
    app.use("/api/boards", board);
};
