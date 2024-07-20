const beritaModel = require('../models/beritaModel');

const getBerita = async (req, res) => {
  try {
    const berita = await beritaModel.getBerita();
    if (berita) {
      res.status(200).json(berita);
    } else {
      res.status(404).json({ error: 'Berita not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateBerita = async (req, res) => {
  const beritaItem = req.body;
  try {
    const result = await beritaModel.updateBerita(beritaItem);
    if (result.affectedRows > 0) {
      res.status(200).json({ message: 'Berita updated successfully', berita: beritaItem });
    } else {
      res.status(404).json({ error: 'Berita not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getBerita,
  updateBerita
};
