var express = require('express');
var router = express.Router();

function check(inputNumber1, inputNumber2, calculate) {
  if(calculate === undefined)
  {
    return 'Vui lòng chọn phép tính';
  }
  else
  {
    if(isNaN(inputNumber1))
    {
      return 'Vui lòng nhập số thực vào ô thứ một';
    }
    else
    {
      if(isNaN(inputNumber2))
      {
        return 'Vui lòng nhập số thực vào ô thứ hai';
      }
      else
      {
        return 'Success';
      }
    }
  }
}

/* GET home page. */
router.get('', function(req, res, next) {
  let x=parseInt(req.query.x);
  let y=parseInt(req.query.y);
  let K;
  let T=check(x, y, req.query.calculate);
  console.log(x);
  console.log(y);
  
  if (T=='Success'){
    switch(req.query.calculate)
    {
      case "cong": K = x + y;
        break;
      case "tru": K = x - y;
        break;
      case "nhan": K = x * y;
        break;
      case "chia": K = x / y;
        break;
    };

    const data = {input1:x, input2:y, Ketqua: K, Thongbao: T};
    res.render('index',data);
  }
  else{
    const data1 = {input1:' ', input2:' ', Ketqua:' ', Thongbao: T};
    res.render('index',data1);
  }
});

module.exports = router;

