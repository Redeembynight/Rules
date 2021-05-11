/*
# 作业帮 解锁付费音频资源
by photonmang

https://mall.zuoyebang.com/mall/goods/audio/voice/list?audioId=\d+ url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/zyb.js
https://apivip.zybang.com/vipols/vip/viphomev1?.+ url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/zyb.js

mall.zuoyebang.com, apivip.zybang.com
*/
re('"freeTrail":\\w+@"status":\\d@"stopTime":""@','"freeTrail":1@"status":1@"stopTime":"9999999999"@')
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
