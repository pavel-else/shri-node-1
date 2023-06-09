const express = require("express");
const { parse } = require('./parse.js');

const app = express();
const port = 3000;

app.use(express.json());

app.post('/parse', async (req, res) => {
    const url = req.body.domainName;

    if (!url) {
        res.send('Undefined domainName');
        return;
    }

    res.json(await parse(url));
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})

