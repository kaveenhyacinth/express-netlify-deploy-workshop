const User = require("../models/User");

exports.createUser = async (firstName, lastName) => {
  try {
    const user = new User({
      firstName,
      lastName,
    });

    const newUser = await user.save();
    if (!newUser) return { result: newUser, success: false };
    return { result: newUser, success: true };
  } catch (error) {
    return { result: error.message, success: false };
  }
};

exports.getUser = async (userId) => {
  try {
    const user = await User.findById(userId);
    if (!user) return { result: user, success: false };
    return { result: user, success: true };
  } catch (error) {
    return { result: error.message, success: false };
  }
};
