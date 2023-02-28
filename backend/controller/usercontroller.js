const user = require('../models/usermodel');

const loginUser = async (req , res) => {
  res.json({ msg: "login user" });
};

const signupUser = async (req , res) => {
    res.json({msg:'signup user'});
};

module.exports = {loginUser , signupUser}
