/*

#grammarly（by 越南大佬）

^https:\/\/subscription\.grammarly\.com\/api\/v1\/.* url script-response-body https://raw.githubusercontent.com/langkhach270389/Surge-LK/main/scripts/langkhach/grammarly.js

subscription.grammarly.com
*/
let obj = JSON.parse($response.body)
obj.isPremium = true;
$done({body:JSON.stringify(obj)})
