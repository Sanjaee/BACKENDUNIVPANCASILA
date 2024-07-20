const {
    getKontenEmpat,
    updateKontenEmpat,
  } = require("../models/kontenEmpatModel");
  
  const fetchKontenEmpat = async (req, res) => {
    try {
      const kontenEmpat = await getKontenEmpat();
      res.json(kontenEmpat);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  const editKontenEmpat = async (req, res) => {
    const {
      image,
      title,
      deskripsi_satu,
      deskripsi_dua,
      deskripsi_tiga
    } = req.body;
    const kontenItem = {
      image,
      title,
      deskripsi_satu,
      deskripsi_dua,
      deskripsi_tiga
    };
  
    try {
      await updateKontenEmpat(kontenItem);
      res.status(200).send("Konten Empat updated successfully.");
    } catch (error) {
      res.status(500).json({ error: error.message });
      console.error(error);
    }
  };
  
  module.exports = {
    fetchKontenEmpat,
    editKontenEmpat,
  };
  