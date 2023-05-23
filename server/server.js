import express from "express";

const app = express();
const port = 5000;


app.get("/", (req, res) => {
    console.log('got get request ');
    res.status(200).send('purpose is to shorten url')
})

app.listen(port, () => {
    console.log(`server running on port ${port}`);
})

