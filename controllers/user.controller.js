const userService = require("../services/UserService");

exports.getUser = (req, res) => {
  const { result, success } = userService.getUser();
  if (!success) return res.status(400).json({ result, success: false });
  return res.status(200).json({ result, success: true });
};
