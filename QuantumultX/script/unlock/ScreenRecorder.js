/*
ScreenRecorder+ 录丸解锁vip
微信公众号：少年歌行PRO 制作

下载地址 https://apps.apple.com/us/app/screen-recorder/id1380506650

圈X配置：
[rewrite_local]
^https:\/\/irecgo\.softin-tech\.com\/user\/info url script-response-body https://raw.githubusercontent.com/Redeembynight/own/main/QuantumultX/script/unlock/ScreenRecorder.js
[mitm]
hostname = irecgo.softin-tech.com
*/

var body = $response.body;
var url = $request.url;

const path1 = '\/user\/info';

let obj = JSON.parse(body);

if (url.indexOf(path1) != -1) {
	obj.data["expires_date_ms"] = 1800000000111;
	body = JSON.stringify(obj);  
 }
$done({body});
