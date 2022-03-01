const router = require("express").Router();
const User = require("../models/user");

// create user
router.post("/", async(req,res)=>{
    const user = new User(req.body);
    try{
        const savedUser = await user.save();
        res.status(200).json(savedUser);
    }catch(err){
        res.status(500).json(err);
    }
});

// Create api to get TODO list for User
router.get("/todo/:id", async(req,res)=>{
    try {
        const user = await User.find().populate('todoList');
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Create User roles for Admin, App user
// User with Admin role should be able to get all Todos

// User with App user role, should be able to fetch only his Todo list




module.exports = router;

