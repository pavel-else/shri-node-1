const express = require("express");
const { parse } = require('./parse.js');

// const app = express();
// const port = 3000;

// app.post('/parse', async (req, res) => {
//     console.log('req', parse('https://test.com/'));
//     res.send(await parse('https://test.com/'));
// })

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`);
// })

parse('https://test.com/').then(async (result) => {
    console.log(result)
});
