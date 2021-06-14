/*
#drafts
越南老哥langkhach270389

下载地址 https://apps.apple.com/us/app/drafts/id1236254471

^https:\/\/backend\.getdrafts\.com\/api\/.*\/verification* url script-response-body https://raw.githubusercontent.com/langkhach270389/Surge-LK/main/scripts/langkhach/draft.js

backend.getdrafts.com,
*/
var obj = JSON.parse($response.body);

obj= {
  "active_expires_at" : "2029-01-01T00:00:00Z",
  "is_subscription_active" : true,
  "active_subscription_type" : "premium",
  "is_blocked" : false
};

$done({body: JSON.stringify(obj)});

// Descriptions
