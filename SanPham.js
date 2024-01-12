const mongoose = require('mongoose');

const url = "mongodb+srv://thanh1:M12L3CnuMauUvgHE@thanhlee.omun8ax.mongodb.net/exercise6?retryWrites=true&w=majority";


mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Kết nối thành công !");
  })
  .catch((err) => {
    console.error("Lỗi kết nối đến MongoDB:", err);
  });

const Schema = mongoose.Schema;

const SanPhamSchema = new Schema({
  tenSP: { type: String, default: 'hahaha' },
  soLuong: { type: Number }
});

const SanPham = mongoose.model('SanPham', SanPhamSchema);

module.exports = SanPham;