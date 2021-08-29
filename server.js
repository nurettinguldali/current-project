const get_coinmarketcap = require("./get_coinmarket");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const app = express();
console.log(app);
//app.set('view-engine', 'ejs');
app.use(express.static(__dirname + "/public"));
app.get("/bitcoin", (req, res) => {
  get_coinmarketcap(res);
});

app.listen(3000);
console.log("serverstarted");
