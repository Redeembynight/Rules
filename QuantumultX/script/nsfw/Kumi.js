/*
公众号少年歌行pro整理

感谢原作者：iOS黑科技
作者微信公众号：ios黑科技
作者官方网站：s7aa.cn

圈X:

[rewrite_local]

#酷咪视频VIP无限看
^https:\/\/(.+)\.com(\/\/api\/movie\/addPlay|\/\/api\/member|\/api\/video_clip\/play|\/api\/app\/message_list|\/api\/home\/index_recommend|\/\/api\/movie\/play\/) url script-response-body https://raw.githubusercontent.com/sngxpro/QuantumultX/master/s7aa.cn/kumi.js

酷咪下载地址
km.app

MITM = *.com
*/


var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);


const p2 = '//api/movie/addPlay';
const p3 = '//api/member';
const p4 = '/api/video_clip/play';
const p5 = '/api/app/message_list';
const p6 = '/api/home/index_recommend';


if (url.indexOf(p2) != -1) {
    obj.data.re_today_view_times = 999;
    body = JSON.stringify(obj);
} 
if (url.indexOf(p3) != -1) {
    obj.data.is_vip = 1;
    obj.data.expire_time = 2099-09-09;
    obj.data.nick_name = "ios黑科技";
    obj.data.expire_time1 = 4092579678;
    body = JSON.stringify(obj);
} 
if (url.indexOf(p4) != -1) {
    obj.data.is_login = 0;
    body = JSON.stringify(obj);
} 
if (url.indexOf(p5) != -1) {
    obj.code = 1;
    body = JSON.stringify(obj);
} 
if (url.indexOf(p6) != -1) {
    obj.data.list.ob_game_list = 1;


} 
$done({body});
