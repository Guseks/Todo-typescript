const express = require("express");
const cors = require("cors");
const routes = require("./routes");

//db.initializeDatabase();


const app = express();
const port = 3001;
const hostname = "localhost";

//Middleware

app.use(express.json());
app.use(cors());

app.use("/TODO", routes);

app.listen(port, hostname, ()=>{
  console.log(`Server is running on http://${hostname}:${port}`);
});
