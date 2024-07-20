const {
    getKontenTiga,
    updateKontenTiga,
  } = require("../models/kontenTigaModel");
  
  const fetchKontenTiga = async (req, res) => {
    try {
      const kontenTiga = await getKontenTiga();
      res.json(kontenTiga);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  const editKontenTiga = async (req, res) => {
    const {
      image,
      title,
      deskripsi_satu,
      deskripsi_dua,
      deskripsi_tiga,
      deskripsi_empat,
      deskripsi_lima,
      deskripsi_enam,
      deskripsi_tujuh,
    } = req.body;
    const kontenItem = {
      image,
      title,
      deskripsi_satu,
      deskripsi_dua,
      deskripsi_tiga,
      deskripsi_empat,
      deskripsi_lima,
      deskripsi_enam,
      deskripsi_tujuh,
    };
  
    try {
      await updateKontenTiga(kontenItem);
      res.status(200).send("Konten Tiga updated successfully.");
    } catch (error) {
      res.status(500).json({ error: error.message });
      console.error(error);
    }
  };
  
  module.exports = {
    fetchKontenTiga,
    editKontenTiga,
  };
  