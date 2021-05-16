/*
# Co Sleep-小睡眠（by 黑黑酱）小睡眠 新版有sign校验
下载地址 https://apps.apple.com/us/app/co-sleep-white-noise/id1194338569

^https:\/\/api\.psy-1\.com\/cosleep\/user\/info url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/xiaoshuimian.js

api.psy-1.com, 
*/

re('"is_vip":\\d@"vip_expires":\\d+@"point_expires_time":\\d','"is_vip":1@"vip_expires":1900839229@"point_expires_time":1900839229')

function re() {
 var body = $response.body;
 if (arguments[0].includes("@")) {
  var regs = arguments[0].split("@");
  var strs = arguments[1].split("@");
  for (i = 0;i < regs.length;i++) {
   var reg = new RegExp(regs[i],"g");
   body = body.replace(reg, strs[i]);
 }
}
 else {
  var reg = new RegExp(arguments[0],"g");
  body = body.replace(reg, arguments[1]);
}
 $done(body);
} 
