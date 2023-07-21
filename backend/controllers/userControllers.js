const User = require("../models/userModel");
const bcrypt = require("bcrypt");

const registerUser = async (req, res) => {
  const { name, email, user, password } = req.body;

  const emailTaken = await User.findOne({ email });
  if (emailTaken) {
    return res.status(400).json({ Error: "Email is already taken" });
  }

  const hash_password = await bcrypt.hash(password, 8);

  const guest = await User.create({
    name,
    email,
    user,
    password: hash_password,
  });
  console.log(`User created: ${guest}`);

  if (guest) {
    res.status(201).json({ _id: guest.id, email: guest.email });
  } else {
    res.status(400);
    throw new Error("User data not valid.");
  }
};

const loginUser = async (req, res) => {
  res.json({message: "User login working"})
}

module.exports = { registerUser, loginUser };
