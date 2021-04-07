const express = require('express')
const app = express()
const port = 8080;
const path = require('path')

app.use(express.static(path.join(__dirname, "..", "public")))
app.use((req, res, next) => {
  res.redirect("/")
})



app.listen(port, () => {
  console.log(`Server now listening at http://localhost:${port}`);
})