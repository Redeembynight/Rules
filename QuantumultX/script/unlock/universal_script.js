/*
# iTunes_verify_receipt（by 越南大佬）
# 该域名万能通用脚本，Attention：试用订阅——取消订阅——恢复订阅
^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/langkhach270389/Quantumult-X-LK/master/Scripts/langkhach/verify_receipt.js

buy.itunes.apple.com,
*/
let body= $response.body;
var obj = JSON.parse(body);
if (body.indexOf("expires") !=-1) {
  obj["receipt"]["in_app"][0]["expires_date"] = "2099-10-19 05:14:18 Etc/GMT";
  obj["receipt"]["in_app"][0]["expires_date_pst"] = "2099-10-18 22:14:18 America/Los_Angeles";
  obj["receipt"]["in_app"][0]["expires_date_ms"] = "4096019658000";
  obj["latest_receipt_info"][0]["expires_date"] = "2099-10-19 05:14:18 Etc/GMT";
  obj["latest_receipt_info"][0]["expires_date_pst"] = "2099-10-18 22:14:18 America/Los_Angeles";
  obj["latest_receipt_info"][0]["expires_date_ms"] = "4096019658000";
  }
$done({body: JSON.stringify(obj)});
