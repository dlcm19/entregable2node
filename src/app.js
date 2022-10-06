const express = require('express');
const app = express();

const importUser = require('./users/users.router')

app.use(express.json())



app.get("/", (req, res) =>{
     res.status(200).json({message:'Serve Okay'})
});

app.use("/", importUser)

app.listen(8000, () => {
    console.log('Server started at port 8000');
})