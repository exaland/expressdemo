const express = require('express');
const helmet = require('helmet');

const app = express();
const PORT = process.env.PORT || 3000;
// add some security-related headers to the response
app.use(helmet());

app.listen(PORT, () => console.info(`server is started on port ${PORT}`));

app.use(express.static('public'));



module.exports = app;
