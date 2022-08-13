const express = require("express");
const env = require("dotenv")
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

//routes
const taskRoutes = require("./routes/task");

// environment variable or you can say constants
env.config();

//mongodb connection
mongoose.connect(
  `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.usaiduj.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
  ).then(() => {
    console.log("Database connected!")
  });

app.use(cors());
app.use(express.json());

app.use("/api", taskRoutes);


app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});