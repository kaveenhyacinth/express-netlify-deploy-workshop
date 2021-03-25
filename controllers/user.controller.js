const userService = require("../services/UserService");

exports.createUser = async (req, res) => {
  const { firstName, lastName } = req.body;
  try {
    const { result, success } = await userService.createUser(
      firstName,
      lastName
    );
    if (!success)
      return res
        .status(400)
        .json({ result, success: false, msg: "Create user failed" });
    return res
      .status(201)
      .json({ result, success: true, msg: "Create user success" });
  } catch (error) {
    res.status(500).json({
      result: error.message,
      success: false,
      msg: "Internal server error at createUser",
    });
  }
};

exports.getUser = async (req, res) => {
  try {
    const { result, success } = await userService.getUser(req.params.userId);
    if (!success)
      return res
        .status(400)
        .json({ result, success: false, msg: "Get user failed" });
    return res
      .status(200)
      .json({ result, success: true, msg: "Get user success" });
  } catch (error) {
    res.status(500).json({
      result: error.message,
      success: false,
      msg: "Internal server error at getUser",
    });
  }
};
