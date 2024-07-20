const db = require("../config/database");

const getKontenSatu = async () => {
  const [rows] = await db.query("SELECT * FROM konten_satu LIMIT 1");
  return rows[0];
};

const updateKontenSatu = async (kontenItem) => {
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
    deskripsi_delapan,
  } = kontenItem;

  const [result] = await db.query(
    `UPDATE konten_satu SET 
      image = ?,
      title = ?,
      deskripsi_satu = ?,
      deskripsi_dua = ?,
      deskripsi_tiga = ?,
      deskripsi_empat = ?,
      deskripsi_lima = ?,
      deskripsi_enam = ?,
      deskripsi_tujuh = ?,
      deskripsi_delapan = ?
    LIMIT 1`,
    [
      image,
      title,
      deskripsi_satu,
      deskripsi_dua,
      deskripsi_tiga,
      deskripsi_empat,
      deskripsi_lima,
      deskripsi_enam,
      deskripsi_tujuh,
      deskripsi_delapan,
    ]
  );
  return result;
};

module.exports = {
  getKontenSatu,
  updateKontenSatu,
};
