const express = require('express');
const mongoose = require('mongoose');
const todoRouter = require('./routes/todo')
const userRouter = require('./routes/user')

const app = express();
app.use(express.json());

app.use(cors());
const PORT = process.env.PORT || 3000;

mongoose
  .connect('mongodb://localhost/Todolist', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.use('/todo', todoRouter)
app.use('/user', userRouter)

app.listen(PORT, ()=>{
    console.log(`app running on port no ${PORT}`)
})