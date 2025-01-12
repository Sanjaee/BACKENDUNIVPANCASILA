const db = require("../config/database");

const getBerita = async () => {
  const [rows] = await db.query("SELECT * FROM berita LIMIT 1");
  return rows[0];
};

const updateBerita = async (beritaItem) => {
  const {
    title_berita_satu,
    title_berita_dua,
    image_berita,
    title_satu,
    deskripsi_satu,
    title_dua,
    deskripsi_dua,
    title_tiga,
    deskripsi_tiga,
    title_empat,
    deskripsi_empat,
    title_lima,
    deskripsi_lima,
    karir_image_satu,
    karir_title_satu,
    karir_deskripsi_satu,
    karir_image_dua,
    karir_title_dua,
    karir_deskripsi_dua,
    karir_image_tiga,
    karir_title_tiga,
    karir_deskripsi_tiga,
    penghargaan_image_satu,
    penghargaan_title_satu,
    penghargaan_deskripsi_satu,
    penghargaan_image_dua,
    penghargaan_title_dua,
    penghargaan_deskripsi_dua,
    penghargaan_image_tiga,
    penghargaan_title_tiga,
    penghargaan_deskripsi_tiga,
    berita_image_satu,
    berita_title_satu,
    berita_deskripsi_satu,
    berita_image_dua,
    berita_title_dua,
    berita_deskripsi_dua,
    berita_image_tiga,
    berita_title_tiga,
    berita_deskripsi_tiga,
  } = beritaItem;

  const [result] = await db.query(
    `UPDATE berita SET 
      title_berita_satu = ?,
      title_berita_dua = ?,
      image_berita = ?,
      title_satu = ?,
      deskripsi_satu = ?,
      title_dua = ?,
      deskripsi_dua = ?,
      title_tiga = ?,
      deskripsi_tiga = ?,
      title_empat = ?,
      deskripsi_empat = ?,
      title_lima = ?,
      deskripsi_lima = ?,
      karir_image_satu = ?,
      karir_title_satu = ?,
      karir_deskripsi_satu = ?,
      karir_image_dua = ?,
      karir_title_dua = ?,
      karir_deskripsi_dua = ?,
      karir_image_tiga = ?,
      karir_title_tiga = ?,
      karir_deskripsi_tiga = ?,
      penghargaan_image_satu = ?,
      penghargaan_title_satu = ?,
      penghargaan_deskripsi_satu = ?,
      penghargaan_image_dua = ?,
      penghargaan_title_dua = ?,
      penghargaan_deskripsi_dua = ?,
      penghargaan_image_tiga = ?,
      penghargaan_title_tiga = ?,
      penghargaan_deskripsi_tiga = ?,
      berita_image_satu = ?,
      berita_title_satu = ?,
      berita_deskripsi_satu = ?,
      berita_image_dua = ?,
      berita_title_dua = ?,
      berita_deskripsi_dua = ?,
      berita_image_tiga = ?,
      berita_title_tiga = ?,
      berita_deskripsi_tiga = ?
    LIMIT 1`,
    [
      title_berita_satu,
      title_berita_dua,
      image_berita,
      title_satu,
      deskripsi_satu,
      title_dua,
      deskripsi_dua,
      title_tiga,
      deskripsi_tiga,
      title_empat,
      deskripsi_empat,
      title_lima,
      deskripsi_lima,
      karir_image_satu,
      karir_title_satu,
      karir_deskripsi_satu,
      karir_image_dua,
      karir_title_dua,
      karir_deskripsi_dua,
      karir_image_tiga,
      karir_title_tiga,
      karir_deskripsi_tiga,
      penghargaan_image_satu,
      penghargaan_title_satu,
      penghargaan_deskripsi_satu,
      penghargaan_image_dua,
      penghargaan_title_dua,
      penghargaan_deskripsi_dua,
      penghargaan_image_tiga,
      penghargaan_title_tiga,
      penghargaan_deskripsi_tiga,
      berita_image_satu,
      berita_title_satu,
      berita_deskripsi_satu,
      berita_image_dua,
      berita_title_dua,
      berita_deskripsi_dua,
      berita_image_tiga,
      berita_title_tiga,
      berita_deskripsi_tiga,
    ]
  );
  return result;
};

module.exports = {
  getBerita,
  updateBerita,
};
