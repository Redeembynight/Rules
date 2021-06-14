/*
#planner5d
越南老哥langkhach270389

下载地址 https://apps.apple.com/us/app/planner-5d-interior-design/id606173978

^https:\/\/planner5d\.com\/api\/sets url script-response-body https://raw.githubusercontent.com/langkhach270389/Surge-LK/main/scripts/langkhach/planner5d.js

planner5d.com,
*/
var obj = JSON.parse($response.body);

obj=
{
  "accessDays": 999999999,
  "allSets": 1,
  "error": 0,
  "m": {
    "r": "999999999",
    "useSubscriptions": true,
    "expiredSubscription": "999999999",
    "subscription": "com.planner5d.planner5d.subscription.yearly"
  }
};

$done({body: JSON.stringify(obj)});

// Descriptions
