const db = require("../config/database");

const getKontenTiga = async () => {
  const [rows] = await db.query("SELECT * FROM konten_tiga LIMIT 1");
  return rows[0];
};

const updateKontenTiga = async (kontenItem) => {
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
  } = kontenItem;

  const [result] = await db.query(
    `UPDATE konten_tiga SET 
      image = ?,
      title = ?,
      deskripsi_satu = ?,
      deskripsi_dua = ?,
      deskripsi_tiga = ?,
      deskripsi_empat = ?,
      deskripsi_lima = ?,
      deskripsi_enam = ?,
      deskripsi_tujuh = ?
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
    ]
  );
  return result;
};

module.exports = {
  getKontenTiga,
  updateKontenTiga,
};
