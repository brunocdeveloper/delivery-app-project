const Service = require('../services/Register');

const registerUser = async (req, res) => {
  try {
    const user = req.body;
    const isCreated = await Service.registerUser(user)
    res.status(201).json({ message: 'Created' });
  } catch (e) {
    console.error(e.message);
    res.status(e.code).json({ message: e.message });
  }
};

module.exports = {
  registerUser,
};
