const navbarModel = require('../models/navbarModel');

const getNavbar = async (req, res) => {
  try {
    const navbar = await navbarModel.getNavbar();
    if (navbar) {
      res.status(200).json(navbar);
    } else {
      res.status(404).json({ error: 'Navbar not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateNavbar = async (req, res) => {
  const navbarItem = req.body;
  try {
    const result = await navbarModel.updateNavbar(navbarItem);
    if (result.affectedRows > 0) {
      res.status(200).json({ message: 'Navbar updated successfully', navbar: navbarItem });
    } else {
      res.status(404).json({ error: 'Navbar not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getNavbar,
  updateNavbar
};
