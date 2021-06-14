/*
#busuu
越南老哥langkhach270389

下载地址 https://apps.apple.com/us/app/busuu-language-learning-app/id379968583

^https:\/\/api\.busuu\.com\/users\/me* url script-response-body https://raw.githubusercontent.com/langkhach270389/Scripting/master/busuu.vip.js

api.busuu.com,
*/
var obj = JSON.parse($response.body);
obj.data.is_premium= true;
obj.data.access.tier= "plus";
$done({body: JSON.stringify(obj)});
