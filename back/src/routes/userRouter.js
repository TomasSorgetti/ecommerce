const { Router } = require("express");
// const { verifyAccessToken } = require("../middlewares/auth");

const userRouter = Router();

const {
  postUserHandler,
  userLoginHandler,
} = require("../handlers/userHandler");


userRouter.post("/", postUserHandler);
userRouter.post("/login", userLoginHandler);


module.exports = userRouter;
