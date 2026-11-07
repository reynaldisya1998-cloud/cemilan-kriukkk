// ===== PENGATURAN TOKO — cukup edit file ini =====
window.TOKO = {
  nama: "Cemilan Kriukkk",
  // Link Web App dari Google Apps Script (lihat PANDUAN). Kosong = mode coba (data cuma di HP ini).
  scriptUrl: "https://script.google.com/macros/s/AKfycbwQQMR6RJ4FuHEZVS90WuPnPtyN3r4Km2nQoZPmjB1dDk7T9azgUoSsjvf22mYmaGqn/exec",
  // Nomor WA penjual untuk konfirmasi pesanan, format 62xxxx. Kosongkan kalau tidak perlu.
  waPenjual: "6285771027687",
  menu: [
    { id: "basreng", nama: "Kripik basreng", foto: "img/basreng.png",
      rasa: ["Original daun jeruk", "Pedas daun jeruk"],
      ukuran: [["100gr", 16000], ["250gr", 29000], ["500gr", 51000]] },
    { id: "bantet", nama: "Krupuk bantet", foto: "img/bantet.png",
      rasa: ["Original", "Pedas"],
      ukuran: [["100gr", 16000], ["250gr", 24000], ["500gr", 41000]] },
    { id: "usus", nama: "Usus krispy", foto: "img/usus.png",
      rasa: ["Original", "Pedas"],
      ukuran: [["95gr", 16000], ["250gr", 28000], ["500gr", 46000]] },
    { id: "makaroni", nama: "Makaroni spiral", foto: "img/makaroni.png",
      rasa: ["Original", "Pedas"],
      ukuran: [["125gr", 16000], ["250gr", 25000], ["500gr", 41000]] },
    { id: "tempe", nama: "Kripik tempe", foto: "img/tempe.png",
      rasa: ["Asin gurih ketumbar"],
      ukuran: [["90gr", 14000], ["200gr", 21000], ["500gr", 41000]] },
    { id: "kripset", nama: "Kripset", foto: "img/kripset.png",
      rasa: ["Original ketumbar", "Pedas"],
      ukuran: [["100gr", 13000], ["250gr", 25000], ["500gr", 43000]] }
  ]
};
