const berandaModel = require('../models/berandaModel');

const getBeranda = async (req, res) => {
  try {
    const beranda = await berandaModel.getBeranda();
    if (beranda) {
      res.status(200).json(beranda);
    } else {
      res.status(404).json({ error: 'Beranda not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateBeranda = async (req, res) => {
  const berandaItem = req.body;
  try {
    const result = await berandaModel.updateBeranda(berandaItem);
    if (result.affectedRows > 0) {
      res.status(200).json({ message: 'Beranda updated successfully', beranda: berandaItem });
    } else {
      res.status(404).json({ error: 'Beranda not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getBeranda,
  updateBeranda
};
