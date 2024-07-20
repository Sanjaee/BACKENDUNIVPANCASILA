const kontenSatuModel = require("../models/kontenSatuModel");

const getKontenSatu = async (req, res) => {
  try {
    const kontenSatu = await kontenSatuModel.getKontenSatu();
    if (kontenSatu) {
      res.status(200).json(kontenSatu);
    } else {
      res.status(404).json({ error: "Konten Satu not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateKontenSatu = async (req, res) => {
  const kontenItem = req.body;
  try {
    const result = await kontenSatuModel.updateKontenSatu(kontenItem);
    if (result.affectedRows > 0) {
      res.status(200).json({ message: "Konten Satu updated successfully", konten: kontenItem });
    } else {
      res.status(404).json({ error: "Konten Satu not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getKontenSatu,
  updateKontenSatu,
};
