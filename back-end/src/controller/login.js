const Service = require('../services/Login');

const verifyExistenceUser = async (req, res, next) => {
  const { email } = req.body;
  const user = await Service.verifyExistenceUser(email);
  if (!user) return res.status(404).json('Not found');
  return res.status(200).json('ok');
};

module.exports = {
  verifyExistenceUser,
};
