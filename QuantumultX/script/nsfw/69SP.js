/*
微信公众号：少年歌行pro
转载请注明出处

圈X
[rewrite_local]
#69视频解锁会员
^http:\/\/69shipin\.vip\/api\/user\/personal url script-response-body https://raw.githubusercontent.com/sngxpro/QuantumultX/master/69sp/69sp.js
^http:\/\/69shipin\.vip\/api\/community\/edit url response-body "code":\d+ response-body "code":200

[mitm]
hostname= 69shipin.vip

下载地址：http://app.exxanz.com/?code=SQDDAH


*/



var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const a = '\/api\/user\/personal';

if (url.indexOf(a) != -1) {
        obj.data.vip_time = "2035-01-01 00:00:00";
	obj.data.nickname = "少年歌行pro解锁vip";
	obj.data.vip = 1;
	obj.data.vip_ymd = "2035-01-01";
	obj.data.huancun_count = 999999;	
        body = JSON.stringify(obj);
} 
$done({body});
