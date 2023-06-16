const addLocalUser =
  (User) =>
  ({ id, email, firstName, lastName, password }) => {
    const user = new User({
      id,
      email,
      firstName,
      lastName,
      password,
      source: "local",
    });
    return user.save();
  };

const getUsers = (User) => () => {
  return User.find({});
};

const getUserByEmail =
  (User) =>
  async ({ email }) => {
    return await User.findOne({ email });
  };

export default (User) => {
  return {
    addLocalUser: addLocalUser(User),
    getUsers: getUsers(User),
    getUserByEmail: getUserByEmail(User),
  };
};
