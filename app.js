// dotenv
require("dotenv").config();
// connect DB
const db = require("./config/db");
db.connect();

const express = require("express");
const cors = require("cors");
const appRouter = require("./routes/index");
const app = express();
const { errorHandler } = require("./src/middlewares/errorHandler");

app.use(express.json());
// Cors
app.use(cors());

// Mount the route
appRouter(app);

app.use(errorHandler);
const port = process.env.APP_PORT;
app.listen(port, () => {
  console.log(`server listen port ${port}`);
});
