/*

微信公众号：少年歌行PRO 制作
电报资源发布群（禁言纯净）@shao66 
电报水友交流群（资源同步）@sngxpro
电报私聊 @shaogebot
QQ群：654371081

圈X配置：

[rewrite_local]
^http?:\/\/api\_\d{4}\.kuwo\.cn\/front\/user\/vipstatus$ url script-response-body https://raw.githubusercontent.com/Redeembynight/own/main/QuantumultX/script/unlock/mainland/2496.js

[mitm]
hostname = api_2496.kuwo.cn

*/

var body = $response.body;
var url = $request.url;

const path1 = '\/front\/user\/vipstatus';

let obj = JSON.parse(body);

if (url.indexOf(path1) != -1) {
	obj.data["vipstatus"] = 1;
	obj.data["expiration_time"] = "2023-01-01";
	body = JSON.stringify(obj);  
 }

$done({body});
