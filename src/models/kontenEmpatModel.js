const db = require("../config/database");

const getKontenEmpat = async () => {
  const [rows] = await db.query("SELECT * FROM konten_empat LIMIT 1");
  return rows[0];
};

const updateKontenEmpat = async (kontenItem) => {
  const {
    image,
    title,
    deskripsi_satu,
    deskripsi_dua,
    deskripsi_tiga
  } = kontenItem;

  const [result] = await db.query(
    `UPDATE konten_empat SET 
      image = ?,
      title = ?,
      deskripsi_satu = ?,
      deskripsi_dua = ?,
      deskripsi_tiga = ?
    LIMIT 1`,
    [
      image,
      title,
      deskripsi_satu,
      deskripsi_dua,
      deskripsi_tiga
    ]
  );
  return result;
};

module.exports = {
  getKontenEmpat,
  updateKontenEmpat,
};
