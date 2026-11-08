// ===== PENGATURAN TOKO — cukup edit file ini =====
window.TOKO = {
  nama: "Cemilan Kriukkk",
  // Link Web App dari Google Apps Script (lihat PANDUAN). Kosong = mode coba (data cuma di HP ini).
  scriptUrl: "https://script.google.com/macros/s/AKfycbwQQMR6RJ4FuHEZVS90WuPnPtyN3r4Km2nQoZPmjB1dDk7T9azgUoSsjvf22mYmaGqn/exec",
  // Nomor WA penjual untuk konfirmasi pesanan, format 62xxxx. Kosongkan kalau tidak perlu.
  waPenjual: "6285771027687",
  menu: [
    { id: "basreng", nama: "Kripik basreng", foto: "img/basreng_w.jpg", fotoRasa: { "Original daun jeruk": "img/basreng_original_w.jpg" },
      rasa: ["Original daun jeruk", "Pedas daun jeruk"],
      ukuran: [["100gr", 13000], ["250gr", 26000], ["500gr", 48000]] },
    { id: "bantet", nama: "Krupuk bantet", foto: "img/bantet_sq.jpg",
      rasa: ["Original", "Pedas"],
      ukuran: [["100gr", 13000], ["250gr", 21000], ["500gr", 38000]] },
    { id: "usus", nama: "Usus krispy", foto: "img/usus_w.jpg",
      rasa: ["Original", "Pedas"],
      ukuran: [["95gr", 13000], ["250gr", 25000], ["500gr", 43000]] },
    { id: "makaroni", nama: "Makaroni spiral", foto: "img/makaroni_w.jpg",
      rasa: ["Original", "Pedas"],
      ukuran: [["125gr", 13000], ["250gr", 22000], ["500gr", 38000]] },
    { id: "tempe", nama: "Kripik tempe", foto: "img/tempe_w.jpg",
      rasa: ["Asin gurih ketumbar"],
      ukuran: [["90gr", 11000], ["200gr", 18000], ["500gr", 38000]] },
    { id: "kripset", nama: "Kripset", foto: "img/kripset_w.jpg",
      rasa: ["Original ketumbar", "Pedas"],
      ukuran: [["100gr", 13000], ["250gr", 25000], ["500gr", 43000]] }
  ]
};
