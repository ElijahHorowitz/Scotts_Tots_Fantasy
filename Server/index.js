const express = require("express");
const app = express();
const cors = require("cors");
const db = require('./models');
const port=3001;

app.use(express.json());
app.use(cors());

// Routers
const scoreboardRouter = require("./routes/scoreboardRouter");
const medianRouter = require("./routes/medianRouter");
const testRouter = require("./routes/testRouter");
const standingRouter = require("./routes/standingRouter");
app.use("/scoreboardRouter",scoreboardRouter);
app.use("/medianRouter", medianRouter);
app.use("/testRouter", testRouter);
app.use("/standingRouter", standingRouter);

db.sequelize.sync().then(() => {
    app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});
});
