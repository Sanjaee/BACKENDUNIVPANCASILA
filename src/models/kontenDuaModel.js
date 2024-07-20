const db = require("../config/database");

const getKontenDua = async () => {
  const [rows] = await db.query("SELECT * FROM konten_dua LIMIT 1");
  return rows[0];
};

const updateKontenDua = async (kontenItem) => {
  const {
    image,
    title,
    deskripsi_satu,
    deskripsi_dua,
    deskripsi_tiga,
    deskripsi_empat,
  } = kontenItem;

  const [result] = await db.query(
    `UPDATE konten_dua SET 
      image = ?,
      title = ?,
      deskripsi_satu = ?,
      deskripsi_dua = ?,
      deskripsi_tiga = ?,
      deskripsi_empat = ?
    LIMIT 1`,
    [
      image,
      title,
      deskripsi_satu,
      deskripsi_dua,
      deskripsi_tiga,
      deskripsi_empat,
    ]
  );
  return result;
};

module.exports = {
  getKontenDua,
  updateKontenDua,
};
