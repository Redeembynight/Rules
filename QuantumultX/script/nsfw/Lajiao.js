/*
微信公众号：少年歌行pro
转载请注明出处

圈X
[rewrite_local]
#辣椒视频解锁会员
^http:\/\/jk\.5apk\.cn\/api(\/reg|\/play) url script-response-body https://raw.githubusercontent.com/sngxpro/QuantumultX/master/lajiao/sngxljsp.js


[mitm]
hostname= jk.5apk.cn

下载地址：http://sdfvs.cxfbhy.live/?code=67JALF


*/



body = $response.body.replace(/is_vip":0/g, 'is_vip":1').
replace(/vip_date":null/g, 'vip_date":"2022-01-01"').
replace(/level_id":\d/g, 'level_id":6').
replace(/isplayed":0/g, 'isplayed":1').
replace(/dltime":\d+/g, 'dltime":1').
replace(/notMore":1/g, 'notMore":0')

$done({body});
