const router = require("express").Router();
const User = require("../controllers/user");
const auth = require("../middleware/admin");

// register user route
router.post("/register", User.createUser);
// login user
router.post("/login", User.login);

// user roles routes
router.get("/todos", auth, User.getAllTodo);
router.get("/:id", auth, User.getUser);
router.patch("/:id", auth, User.updateUser);
router.delete("/deleteAll", auth, User.deleteAllUser);
router.delete("/:id", auth, User.deleteUser);

module.exports = router;

