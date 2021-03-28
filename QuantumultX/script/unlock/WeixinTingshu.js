/*
#微信听书解锁vip（少年歌行pro製作）
QX:
[rewrite_local]
#解锁会员
^https:\/\/i\.at\.qq\.com\/pay\/memberinfo url script-response-body https://raw.githubusercontent.com/sngxpro/QuantumultX/master/wxts/wxts.js

[mitm]
hostname = i.at.qq.com,

*/

let obj = JSON.parse($response.body);
obj = {
  "isMember": 1,
  "isAutoRenewable": 1,
  "startTime": 1612600608,
  "endTime": 4092647115,
  "autoRenewableChannel": 0,
  "autoRenewableTime": 0,
  "expiresIn": 999999999,
  "subscriptionPeriod": 1,
  "subscriptionPrice": 999999,
  "historyAutoRenewable": true,
  "hasPromoRight": false,
  "subscriptionDesc": "永久会员",
  "subscriptionButtonLabel": ""
 };

$done({body: JSON.stringify(obj)});
