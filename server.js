const express = require("express");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 5000;
const connectDB = require("./db");

//DB Connection
connectDB();

//Middleware
app.use(express.json({ extended: false }));
app.use(cors());
//Routes
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/form", require("./routes/forms"));

app.listen(PORT, () => {
  console.log(`Server running @ ${PORT}`);
});
