const express = require('express');
const app = express();
const mongoose = require('mongoose');

const port = process.env.PORT || 9000;
app.listen(port, (req, res)=>{
	console.log(`server started on port ${port}`);
});
