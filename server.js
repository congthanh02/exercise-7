const express = require('express');
const SanPham = require('./SanPham');

const app = express();
const port = 3000;
app.listen(port, ()=>{
});
	console.log("Server Dang chay http://localhost:" + port);
app.get(('/'),(req, res)=>
{

//   const sp = new SanPham({tenSP :  'tao' , soLuong: 20});
//   sp.save().then(()=>{  
//     console.log("Thêm sản phẩm thành công ...") 
// }).catch((err)=>{ throw err});

  for (let index = 0; index < 20; index++) {
    const sp = new SanPham({tenSP :  'tao' + String(index) , soLuong: index});
    sp.save().then(()=>{  console.log("Thêm sản phẩm thành công ...") }).catch((err)=>{ throw err});
  }
  //xóa
  // SanPham.deleteMany({  },(err)=>{
  // if(err) return err;
  // console.log("Xóa toàn bộ thành công");
  // });
  
  //update
  // SanPham.updateOne({tenSP : 'tao 1'}, {tenSP : 'tao 1', soLuong: 11111}, (err , res)=>
  // {
  //   if(err) throw err;
  //   console.log("Cập nhật sản phẩm thành công");
  //   console.log(res);
    
  // });
    SanPham.find({})
      .then((docs) => {
        res.send(docs);
      })
      .catch((err) => {
        console.error("Lỗi truy vấn cơ sở dữ liệu:", err);
        res.status(500).send("Lỗi truy vấn cơ sở dữ liệu.");
      });
  });
  