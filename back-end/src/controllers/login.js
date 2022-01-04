const Service = require('../services/Login');

const verifyExistenceUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Service.verifyExistenceUser(email, password);
    return res.status(200).json('ok'); 
  } catch (e) {
    console.error(e.message);
    return res.status(404).json({ message: e.message });
  }
};

module.exports = {
  verifyExistenceUser,
};
