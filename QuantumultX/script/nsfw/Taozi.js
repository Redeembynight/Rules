/*
微信公众号：少年歌行pro
转载请注明出处

圈X
[rewrite_local]
#桃子视频解锁会员
^http:\/\/api.*.xyz\/fast-cloud\/user\/info url script-response-body https://raw.githubusercontent.com/sngxpro/QuantumultX/master/tzsp/sngxtz.js


[mitm]
hostname= api.*.xyz

下载地址：https://av2.fit?code=ECLCJELC


*/

body = $response.body.replace(/vipType":0/g, 'vipType":1').replace(/vipValidDate":null/g, 'vipValidDate":1800000000000');
$done({body});
