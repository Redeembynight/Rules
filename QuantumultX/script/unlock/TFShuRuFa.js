/*
微信公众号：ios黑科技
官方网站：s7aa.cn

QX:

#TF输入法解锁会员
^http:\/\/api\.chuangqi\.store\/.+ url script-response-body tfsrf.js

[mitm]
hostname = api.chuangqi.store

TF输入法商店搜索下载
https://apps.apple.com/us/app/id1537722262
*/

var obj = JSON.parse($response.body);
obj.data.vip_end_time = "永久会员";
obj.data.isvip = 1;
obj.data.is_p = 1;

$done({body: JSON.stringify(obj)}); 
