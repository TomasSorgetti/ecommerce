const { Router } = require("express");
const { verifyAccessToken } = require("../middlewares/auth");

const userRouter = Router();

const {
  postUserHandler,
  userLoginHandler,
  getUserById,
} = require("../handlers/userHandler");


userRouter.post("/", postUserHandler);
userRouter.post("/login", userLoginHandler);
userRouter.get("/",verifyAccessToken, getUserById);


module.exports = userRouter;
