const app = require("../app");
const route = require("../routes/livestream");

app.use("/api/", route);

module.exports = app;
