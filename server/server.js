const express = require("express");

const app = express();

app.get("/api", (req, res) => {
    res.json({"users":[
        "danny",
        "Wendy",
        "Miguel"
    ]});
})

//The server will run on port 5000 and React will run on port 3000.
app.listen(5000, () => {
    console.log("Server started on port 5000.");
})