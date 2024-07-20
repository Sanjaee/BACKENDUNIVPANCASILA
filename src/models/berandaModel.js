const db = require("../config/database");

const getBeranda = async () => {
  const [rows] = await db.query("SELECT * FROM beranda LIMIT 1");
  return rows[0];
};

const updateBeranda = async (berandaItem) => {
  const {
    background_image_desktop,
    background_image_mobile,
    gambar_teks_slider,
    gambar_slider,
    gambar_berita_satu,
    title_berita_satu,
    deskripsi_berita_satu,
    gambar_berita_dua,
    title_berita_dua,
    deskripsi_berita_dua,
    gambar_berita_tiga,
    title_berita_tiga,
    deskripsi_berita_tiga,
    gambar_berita_empat,
    title_berita_empat,
    deskripsi_berita_empat,
    galery_baner,
    gambar_galery_satu,
    galert_title_satu,
    gambar_galery_dua,
    galert_title_dua
  } = berandaItem;

  const [result] = await db.query(
    `UPDATE beranda SET 
      background_image_desktop = ?,
      background_image_mobile = ?,
      gambar_teks_slider = ?,
      gambar_slider = ?,
      gambar_berita_satu = ?,
      title_berita_satu = ?,
      deskripsi_berita_satu = ?,
      gambar_berita_dua = ?,
      title_berita_dua = ?,
      deskripsi_berita_dua = ?,
      gambar_berita_tiga = ?,
      title_berita_tiga = ?,
      deskripsi_berita_tiga = ?,
      gambar_berita_empat = ?,
      title_berita_empat = ?,
      deskripsi_berita_empat = ?,
      galery_baner = ?,
      gambar_galery_satu = ?,
      galert_title_satu = ?,
      gambar_galery_dua = ?,
      galert_title_dua = ?
    WHERE id = 1`,
    [
      background_image_desktop,
      background_image_mobile,
      gambar_teks_slider,
      gambar_slider,
      gambar_berita_satu,
      title_berita_satu,
      deskripsi_berita_satu,
      gambar_berita_dua,
      title_berita_dua,
      deskripsi_berita_dua,
      gambar_berita_tiga,
      title_berita_tiga,
      deskripsi_berita_tiga,
      gambar_berita_empat,
      title_berita_empat,
      deskripsi_berita_empat,
      galery_baner,
      gambar_galery_satu,
      galert_title_satu,
      gambar_galery_dua,
      galert_title_dua
    ]
  );
  return result;
};

module.exports = {
  getBeranda,
  updateBeranda,
};
