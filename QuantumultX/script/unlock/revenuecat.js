/*
noto笔记解锁Pro--Eric
https://api.revenuecat.com/v1/subscribers url script-response-body https://raw.githubusercontent.com/Alex0510/Eric/master/surge/Script/noto.js

hostname：api.revenuecat.com
*/

let obj = JSON.parse($response.body);
obj.subscriber.entitlements = {"pro":{"expires_date":"2099-12-01T00:00:00Z","product_identifier":"com.lkzhao.editor.pro.ios.yearly","purchase_date":"2019-12-01T00:00:00Z"}},
obj.subscriber.subscriptions = {"com.lkzhao.editor.pro.ios.yearly":{"billing_issues_detected_at":null,"expires_date":"2099-12-01T00:00:00Z","is_sandbox":false,"original_purchase_date":"2019-12-01T00:00:00Z","period_type":"trial","purchase_date":"2019-12-01T00:00:00Z","store":"app_store","unsubscribe_detected_at":null}}
$done({body: JSON.stringify(obj)});
