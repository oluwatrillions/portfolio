const express = require('express')
const app = express();
const cors = require('cors')
const mongoose = require('mongoose')


app.listen(4000, () => console.log(`server running on port ${4000}`));