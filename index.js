const express = require('express');
const  app = express();
const morgan = require('morgan');

const Routes = require('./routes/routes')
// app.get("/" , Routes.routes);

// midleware is here
const ownmidleware = (req ,res,next)=>{
    console.log('middleware is here');
    next();
}

app.use(morgan("dev"));
app.use(ownmidleware)
app.use(Routes);


// server  port   is here 
// const port = 8080
const port = process.env.port || 8080;
app.listen(port , ()=>{
    console.log(`a node js api is on port ${port}`);
});