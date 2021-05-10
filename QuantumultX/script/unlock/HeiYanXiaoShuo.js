/*
#黑岩小说（少年歌行pro整理）
下载地址：https://apps.apple.com/us/app/%E9%BB%91%E5%B2%A9%E5%B0%8F%E8%AF%B4-%E7%83%AD%E9%97%A8%E5%B0%8F%E8%AF%B4%E6%9C%89%E5%A3%B0%E5%90%AC%E4%B9%A6%E9%98%85%E8%AF%BB%E5%99%A8/id1370833664

https://biz.lemonyd.com(\/user\/account\/info|\/activity\/activity\/account) url script-response-body https://raw.githubusercontent.com/sngxpro/QuantumultX/master/hyxs/hyxs.js

biz.lemonyd.com
*/


body = $response.body.replace(/isVip":\w+/g, 'isVip":true').replace(/shell":\d+/g, 'shell":6666666');
$done({body});
