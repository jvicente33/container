const express = require('express');
const path = require('path');

const port = process.env.PORT || 8010;

const app = express();

//Static
app.use('/', express.static(path.join(__dirname, '/dist/')));
//app.use(express.static(__dirname + '/dist/'));

//Output
app.listen(port, () => {
console.log(`Server on port ${port}`);
});

