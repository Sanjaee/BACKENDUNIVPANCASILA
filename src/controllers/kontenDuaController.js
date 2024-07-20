const kontenDuaModel = require("../models/kontenDuaModel");

const getKontenDua = async (req, res) => {
  try {
    const kontenDua = await kontenDuaModel.getKontenDua();
    if (kontenDua) {
      res.status(200).json(kontenDua);
    } else {
      res.status(404).json({ error: "Konten Dua not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateKontenDua = async (req, res) => {
  const kontenItem = req.body;
  try {
    const result = await kontenDuaModel.updateKontenDua(kontenItem);
    if (result.affectedRows > 0) {
      res.status(200).json({ message: "Konten Dua updated successfully", konten: kontenItem });
    } else {
      res.status(404).json({ error: "Konten Dua not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getKontenDua,
  updateKontenDua,
};
