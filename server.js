const express = require("express");

require("./Config/dbConnect");

const app = express();
app.use(express.json());

app.use("/auth", require("./routers/authRouter"));
app.use("/user", require("./routers/userRouter"));

app.listen(4000, () => console.log("Server up avnd running"));
