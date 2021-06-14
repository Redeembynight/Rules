/*
#all apps monkey
越南老哥langkhach270389

下载地址 https://apps.apple.com/us/app/monkey-junior-learn-to-read/id930331514

^https:\/\/www\.api\.monkeyuni\.net\/api\/.+\/mobile\/account\/load-update url script-response-body https://raw.githubusercontent.com/langkhach270389/Surge-LK/main/scripts/langkhach/monkey.js

www.api.monkeyuni.net, 
*/
var obj = JSON.parse($response.body);

obj.data.purchased=
{
      "product_list": [
      ],
      "is_active": true,
      "time_expire": 0,
      "pay_inapp": true,
      "is_free": false
    };
$done({body: JSON.stringify(obj)});

// Descriptionsp
