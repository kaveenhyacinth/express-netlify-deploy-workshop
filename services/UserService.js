exports.getUser = () => {
  const user = {
    firstName: "John",
    lastName: "Doe",
    email: "john@mail.doe",
  };
  return { result: user, success: true };
};
