const { SECRET } = process.env;
const {
  createUser,
  loginUser,
  getUser,
} = require("../controllers/userController");

//************* Create User ***************//
const postUserHandler = async (req, res) => {
  try {
    const response = await createUser(req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//************* Login User ***************//
const userLoginHandler = async (req, res) => {
  try {
      const response = await loginUser(req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getUserById = async (req, res) => {
  const userId = req.userId;
  try {
    const response = await getUser(userId);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  postUserHandler,
  userLoginHandler,
  getUserById,
};
