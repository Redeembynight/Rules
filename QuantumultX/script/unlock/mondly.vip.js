/*
#mondly
越南老哥langkhach270389

下载地址 https://apps.apple.com/us/app/learn-33-languages-with-mondly/id987873536

^https:\/\/api\.mondlylanguages\.com\/v1\/ios\/user\/sync$ url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/mondly.vip.js

api.mondlylanguages.com
*/
var obj = JSON.parse($response.body);

obj["pucharses"]= [10];
obj["subscriptions"]=  {
  "10": "2099-09-09 05:05:05"
};
obj["subscription"]=  {
  "10": "2099-09-09 05:05:05"
};
obj["parsed_transactions"]= [
  "540000370283138"
];
$done({body: JSON.stringify(obj)});
