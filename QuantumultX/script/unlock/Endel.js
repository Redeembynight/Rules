/
#Endel（by 越南老哥）
下载地址：https://apps.apple.com/us/app/endel-focus-sleep-relax/id1346247457

^https:\/\/api-production\.endel\.io\/.*\/call url script-response-body https://raw.githubusercontent.com/langkhach270389/Surge-LK/main/scripts/langkhach/endel.js

api-production.endel.io
/
var obj = JSON.parse($response.body);

obj["subscription"]= {
    "time_left" : 0,
    "trial_type" : "CALENDAR_BASED",
    "price_id" : "",
    "period" : "NOPERIOD",
    "cancel_at_period_end" : false,
    "valid_until" : 1873089612.367564,
    "type" : "ACTIVE",
    "store" : "NOSTORE"
    };

$done({body: JSON.stringify(obj)});
