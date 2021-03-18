/*
作者公众号：ios黑科技
作者官方网站：s7aa.cn

公众号少年歌行pro整理并托管

圈X
[rewrite_local]
#波波视频会员去广告（短视频未解锁，网球全部解锁）
^http:\/\/api\.wscdn\.vip\/index.+ url script-response-body https://raw.githubusercontent.com/sngxpro/QuantumultX/master/s7aa.cn/bbsp.js

[mitm]
hostname= api.wscdn.vip

波波视频下载地址：
http://wssp22.com

*/



var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const p5 = '/Get/appStartAdvert';
const p1 = '/Get/videoInfo';
const p2 = '/User/ucenter';
const p3 = '//get/videoList3';
const p4 = '/Get/indexData';

if (url.indexOf(p5) != -1) {
    obj = {
  "code": 1,
},
    body = JSON.stringify(obj);
} 
if (url.indexOf(p2) != -1) {
    obj.data.isVip = 1,
    obj.data.isVip_forever = 1,
    obj.data.day = "永久会员",
    body = JSON.stringify(obj);
} 
if (url.indexOf(p3) != -1) {
    obj.data.is_free = 1,
    obj.data.buyStatus = 1,
    body = JSON.stringify(obj);
} 
if (url.indexOf(p4) != -1) {
    obj.data.is_free = 1,
    obj.data.free_time = 999,
    obj.data.buyStatus = 1,
    body = JSON.stringify(obj);
} 
if (url.indexOf(p1) != -1) {
    obj.data.is_free = 1,
    obj.data.free_time = 999,
    obj.data.buyStatus = 1,
    body = JSON.stringify(obj);
} 
$done({body});
