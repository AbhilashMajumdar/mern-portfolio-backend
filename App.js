const express = require("express");
const dotenv = require("dotenv");
const headerRouter = require("./routes/Header");
const experienceRouter = require("./routes/Experience");
const projectsRouter = require("./routes/Projects");
const educationRouter = require("./routes/Education");
const achievementsRouter = require("./routes/Achievements");
const certificationsRouter = require("./routes/Certifications");
const contactRouter = require('./routes/Contact');
const aboutRouter = require('./routes/About');
const skillsRouter = require('./routes/Skills');
const userRouter = require('./routes/User');

const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config({ path: "./config/config.env" });

require("./conn/Db");

app.use("/portfolio", headerRouter);
app.use("/portfolio", experienceRouter);
app.use("/portfolio", projectsRouter);
app.use("/portfolio", educationRouter);
app.use("/portfolio", achievementsRouter);
app.use("/portfolio", certificationsRouter);
app.use("/portfolio", contactRouter);
app.use("/portfolio", aboutRouter);
app.use("/portfolio", skillsRouter);
app.use("/portfolio", userRouter);

module.exports = app;
