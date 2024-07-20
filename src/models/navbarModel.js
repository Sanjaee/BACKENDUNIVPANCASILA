const db = require("../config/database");

const getNavbar = async () => {
  const [rows] = await db.query("SELECT * FROM navbar LIMIT 1");
  return rows[0];
};

const updateNavbar = async (navbarItem) => {
  const {
    logo_satu,
    logo_dua,
    text_conten_satu,
    text_conten_dua,
    text_conten_tiga,
    text_conten_empat
  } = navbarItem;

  const [result] = await db.query(
    `UPDATE navbar SET 
      logo_satu = ?,
      logo_dua = ?,
      text_conten_satu = ?,
      text_conten_dua = ?,
      text_conten_tiga = ?,
      text_conten_empat = ?
    WHERE id = 1`,
    [
      logo_satu,
      logo_dua,
      text_conten_satu,
      text_conten_dua,
      text_conten_tiga,
      text_conten_empat
    ]
  );
  return result;
};

module.exports = {
  getNavbar,
  updateNavbar,
};
