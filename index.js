const express = require("express")

const app = express();

app.use(express.json())

app.use('/auth', require("./Route/auth"))

app.listen(process.env.PORT||8080, () => {
    console.log("Listening on port 3000, 8080")
})