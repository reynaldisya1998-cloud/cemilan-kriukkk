// Penghubung ke Google Sheet (lewat Apps Script). Kalau scriptUrl kosong => mode coba pakai penyimpanan HP.
(function () {
  const T = window.TOKO;
  const DEMO = !T.scriptUrl;
  const rp = n => "Rp " + Math.round(n).toLocaleString("id-ID");
  // ---------- mode coba ----------
  const K = "kriuk_demo";
  const load = () => { try { return JSON.parse(localStorage.getItem(K)) || null; } catch (e) { return null; } };
  const st = () => load() || { open: true, po: 1, poNama: "PO #1", pin: "1234", orders: [], kirim: 0 };
  const sv = s => { try { localStorage.setItem(K, JSON.stringify(s)); } catch (e) {} };
  async function demo(a, p) {
    const s = st();
    if (a === "info") return { ok: true, open: s.open, poNama: s.poNama };
    if (a === "order") {
      if (!s.open) return { ok: false, msg: "PO sedang ditutup" };
      const id = "K" + String(s.orders.filter(o => o.po === s.po).length + 1).padStart(3, "0");
      s.orders.push({ id, waktu: new Date().toISOString(), po: s.po, nama: p.nama, wa: p.wa || "", catatan: p.catatan || "",
        items: p.items, total: p.total, kirim: 0, lunas: false, batal: false, sumber: p.sumber || "web" });
      sv(s); return { ok: true, id };
    }
    if (String(p.pin) !== s.pin) return { ok: false, msg: "PIN salah" };
    if (a === "list") return { ok: true, open: s.open, poNama: s.poNama, orders: s.orders.filter(o => o.po === s.po) };
    if (a === "kirim") { const n = Math.max(0, ...s.orders.filter(o => o.po === s.po).map(o => o.kirim)) + 1;
      let c = 0; s.orders.forEach(o => { if (o.po === s.po && !o.kirim && !o.batal) { o.kirim = n; c++; } }); sv(s); return { ok: true, n, c }; }
    if (a === "lunas") { const o = s.orders.find(o => o.id === p.id && o.po === s.po); if (o) o.lunas = !!p.val; sv(s); return { ok: true }; }
    if (a === "batal") { const o = s.orders.find(o => o.id === p.id && o.po === s.po); if (o) o.batal = !!p.val; sv(s); return { ok: true }; }
    if (a === "buka") { s.open = !!p.val; sv(s); return { ok: true }; }
    if (a === "baru") { s.po++; s.poNama = p.nama || ("PO #" + s.po); s.open = true; sv(s); return { ok: true }; }
    return { ok: false, msg: "aksi tidak dikenal" };
  }
  // ---------- Google Apps Script ----------
  async function call(a, p) {
    p = p || {};
    if (DEMO) return demo(a, p);
    try {
      if (a === "info") {
        const r = await fetch(T.scriptUrl + "?a=info&t=" + Date.now());
        return await r.json();
      }
      const r = await fetch(T.scriptUrl, { method: "POST", body: JSON.stringify(Object.assign({ a }, p)) });
      return await r.json();
    } catch (e) {
      return { ok: false, msg: "Koneksi gagal, coba lagi ya." };
    }
  }
  window.API = { call, DEMO, rp };
})();
